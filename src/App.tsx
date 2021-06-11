import { useState } from 'react';
import theme from './theme';
import { Button, CssBaseline, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Info, ValueCountChart } from './ValueCountChart';
import { Octokit } from '@octokit/rest';

function sendRequest(setBytes: (bytes: Uint8Array) => void) {
  const request = new XMLHttpRequest();
  const url = 'https://raw.githubusercontent.com/scott-fleischman/ucd/Unicode-13.0/UnicodeData.txt';
  const isAsync = true;
  request.open('GET', url, isAsync);
  request.responseType = 'arraybuffer';
  const startTime = performance.now();

  request.onload = onLoadRequest(startTime, setBytes, request);

  request.send(null);
}

function base64ToUint8Array(base64Content: string): Uint8Array {
  const binaryString = atob(base64Content);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

const onLoadRequest =
  (startTime: number, setBytes: (bytes: Uint8Array) => void, request: XMLHttpRequest) =>
    (_: ProgressEvent<EventTarget>) => {
      const onloadTime = performance.now();
      const loadTime = onloadTime - startTime;
      const url = request.responseURL;
      console.log({ message: 'onload url', url, loadTime });

      const arrayBuffer: ArrayBuffer = request.response;
      if (!arrayBuffer) {
        console.log({ error: 'Unable to load url' });
        return;
      }
      console.log({ byteLength: arrayBuffer.byteLength })

      setBytes(new Uint8Array(arrayBuffer));
    };

const Loader = () => {
  const [bytes, setBytes] = useState<Uint8Array>(new Uint8Array());
  const onClickBytes = () => {
    sendRequest(setBytes);
  };
  const onClickGitHub = () => {
    const octokit = new Octokit({
      userAgent: 'Bits and Bytes v1.0',
    });
    const owner = 'scott-fleischman';
    const repo = 'ucd';
    const branch = 'Unicode-13.0';
    const path = 'UnicodeData.txt';

    type RepoFileBytesInput = { owner: string, repo: string, branch: string, path: string };
    const getRepoFileBytes = async ({ owner, repo, branch, path }: RepoFileBytesInput) => {
      const { data: branchData } = await octokit.rest.repos.getBranch({ owner, repo, branch });
      const commitSha = branchData.commit.sha;
      console.log({ message: 'getBranch result', owner, repo, branch, commitSha });

      const { data: commitData } = await octokit.rest.repos.getCommit({ owner, repo, ref: commitSha });
      const commitMessage = commitData.commit.message;
      const treeSha = commitData.commit.tree.sha;
      console.log({ message: 'getCommit result', commitMessage, owner, repo, branch, commitSha, treeSha });

      const { data: treeData } = await octokit.rest.git.getTree({ owner, repo, tree_sha: treeSha });

      const unicodeData = treeData.tree.find((item) => item.path === path);
      if (!unicodeData || !unicodeData.sha) {
        throw new Error(`Unable to find ${path}`);
      }
      const fileSha = unicodeData.sha;
      console.log(unicodeData);
      const { data: blobData } = await octokit.rest.git.getBlob({ owner, repo, file_sha: fileSha });
      const bytes = base64ToUint8Array(blobData.content);
      setBytes(bytes);
    };

    const input = { owner, repo, branch, path };
    getRepoFileBytes(input)
      .catch(error => console.error({ message: 'getRepoFileBytes', error, input }));
  };

  const infos: Info[] = new Array(256);
  for (let index = 0; index < 256; index++) {
    infos[index] = {
      label: index.toString(),
      count: 0,
    };
  }
  const byteValues = bytes.values();
  for (const byte of byteValues) {
    const existing = infos[byte];
    existing.count = existing.count + 1;
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={onClickBytes}>
        Load Bytes
      </Button>
      <Button variant="contained" color="primary" onClick={onClickGitHub}>
        GitHub
      </Button>
      <Typography variant="body2" color="textSecondary" align="center">
        {bytes.length + ' bytes'}
      </Typography>

      <ValueCountChart infos={infos} />
    </div>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Loader />
  </ThemeProvider>
);

export default App;
