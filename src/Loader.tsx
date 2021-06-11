import { useState } from 'react';
import { Button, Container, TextField, Typography } from '@material-ui/core';
import { Info, ValueCountChart } from './ValueCountChart';
import { Octokit } from '@octokit/rest';

function base64ToUint8Array(base64Content: string): Uint8Array {
  const binaryString = atob(base64Content);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

const Loader = () => {
  const [bytes, setBytes] = useState<Uint8Array>(new Uint8Array());
  const [authToken, setAuthToken] = useState('');
  const userAgent = 'Bits and Bytes v1.0';

  const handleChangeAuthToken = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAuthToken(event.target.value as string);
  };

  const onClickSaveSettings = () => {
    const octokit = new Octokit({ userAgent, auth: authToken });
    const owner = 'ancientlanguage';
    const repo = 'bits-and-bytes-settings';
    const branch = 'main';

    const updatedAt: string = new Date().toISOString();
    const settings = { updatedAt };
    const settingsString = JSON.stringify(settings);
    const writeCommit = async () => {
      const { data: branchData } = await octokit.rest.repos.getBranch({ owner, repo, branch });
      const oldCommitSha = branchData.commit.sha;
      console.log({ message: 'getBranch result', owner, repo, branch, commitSha: oldCommitSha });

      const { data: commitData } = await octokit.rest.repos.getCommit({ owner, repo, ref: oldCommitSha });
      const commitMessage = commitData.commit.message;
      const baseTreeSha = commitData.commit.tree.sha;
      console.log({ message: 'getCommit result', commitMessage, owner, repo, branch, commitSha: oldCommitSha, baseTreeSha });

      const { data: blobData } = await octokit.rest.git.createBlob({
        owner,
        repo,
        content: settingsString,
        encoding: 'utf-8'
      });
      const blobSha = blobData.sha;
      console.log({ message: 'createBlob result', owner, repo, blobSha });

      const { data: treeData } = await octokit.rest.git.createTree({
        owner,
        repo,
        tree: [{
          path: 'settings.json',
          mode: '100644',
          type: 'blob',
          sha: blobSha
        }],
        base_tree: baseTreeSha
      });
      const treeSha = treeData.sha;
      console.log({ message: 'createTree result', owner, repo, treeSha });

      const { data: newCommitData } = await octokit.rest.git.createCommit({
        owner,
        repo,
        message: `Update settings at ${updatedAt}`,
        parents: [oldCommitSha],
        tree: treeSha
      });
      const newCommitSha = newCommitData.sha;
      console.log({ message: 'createCommit result', owner, repo, newCommitSha });

      await octokit.rest.git.updateRef({
        owner,
        repo,
        ref: `heads/${branch}`,
        sha: newCommitSha,
      });
      console.log({ message: 'updateRef result', owner, repo, branch, newCommitSha });
    };

    writeCommit();
  };
  const onClickGitHub = () => {
    const octokit = new Octokit({ userAgent, auth: authToken });
    const owner = 'scott-fleischman';
    const repo = 'ucd';
    const branch = 'Unicode-13.0';
    const path = 'UnicodeData.txt';

    const getRepoFileBytes = async () => {
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

    getRepoFileBytes()
      .catch(error => console.error({ message: 'getRepoFileBytes', error, owner, repo, branch, path }));
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
      <Container>
        <Button variant="contained" color="primary" onClick={onClickSaveSettings}>
          Save Settings
        </Button>
        <Button variant="contained" color="primary" onClick={onClickGitHub}>
          Load from GitHub
        </Button>
        <TextField
          id="auth-token"
          label="GitHub Token"
          type="password"
          value={authToken}
          onChange={handleChangeAuthToken}
          variant="outlined"
        />
      </Container>
      <Typography variant="body2" color="textSecondary" align="center">
        {bytes.length + ' bytes'}
      </Typography>

      <ValueCountChart infos={infos} />
    </div>
  );
};

export default Loader;
