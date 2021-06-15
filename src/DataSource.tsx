import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { GitHubFile, GitHubFileResult } from './Settings';
import { Octokit } from '@octokit/rest';

function makeInitialTextState(label: string, input: string | undefined): TextState {
  const value = input || '';
  return {
    label,
    value,
    isError: false
  };
};

const TextStateField = (props: { textState: TextState; onChangeValue: (value: string) => void; }) => {
  const { textState, onChangeValue } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(event.target.value);
  };
  return (
    <TextField
      error={textState.isError}
      label={textState.label}
      value={textState.value}
      onChange={handleChange}
      helperText={textState.errorMessage}
      variant="filled"
    />
  );
};

const fetchShas = async (octokit: Octokit,
  owner: string,
  repo: string,
  branch: string,
  path: string,
  updateResult: (result: GitHubFileResult) => void
) => {
  let result: GitHubFileResult = {};
  const getBranchResult = await octokit.rest.repos.getBranch({ owner, repo, branch })
    .catch((error) => {
      result.fetchError = error.toString();
      result.getBranchError = true;
      updateResult(result);
    });
  if (!getBranchResult) {
    result.getBranchError = true;
    updateResult(result);
    return;
  }
  const commitSha = getBranchResult.data.commit.sha;
  result.commitSha = commitSha;
  updateResult(result);

  const getCommitResult = await octokit.rest.repos.getCommit({ owner, repo, ref: commitSha })
    .catch((error) => {
      result.fetchError = error.toString();
      result.getCommitError = true;
      updateResult(result);
    });
  if (!getCommitResult) {
    result.getCommitError = true;
    return;
  }
  result.commitMessage = getCommitResult.data.commit.message;
  const treeSha = getCommitResult.data.commit.tree.sha;
  result.treeSha = treeSha;
  updateResult(result);

  const getTreeResult = await octokit.rest.git.getTree({ owner, repo, tree_sha: treeSha })
    .catch((error) => {
      result.fetchError = error.toString();
      result.getTreeError = true;
      updateResult(result);
    });
  if (!getTreeResult) {
    result.getTreeError = true;
    updateResult(result);
    return;
  }

  const fileData = getTreeResult.data.tree.find((item) => item.path === path);
  if (!fileData) {
    result.findFileError = true;
    updateResult(result);
    return;
  }
  result.fileSha = fileData.sha;
  result.fileSize = fileData.size;
  updateResult(result);
};

type TextState = {
  label: string;
  value: string;
  isError: boolean;
  errorMessage?: string;
};

const DataSource = (props: { dataSource: GitHubFile }) => {
  const octokit = new Octokit({userAgent: 'Bits and Bytes v1.0'});
  const { dataSource } = props;
  const [owner, setOwner] = useState(makeInitialTextState('Owner', dataSource.owner));
  const [repo, setRepo] = useState(makeInitialTextState('Repo', dataSource.repo));
  const [path, setPath] = useState(makeInitialTextState('Path', dataSource.path));
  const [branch, setBranch] = useState(makeInitialTextState('Branch', dataSource.branch));
  const [commitSha, setCommitSha] = useState(dataSource.commitSha || '');
  const [commitMessage, setCommitMessage] = useState<string | undefined>(undefined);
  const [treeSha, setTreeSha] = useState(dataSource.treeSha || '');
  const [fileSha, setFileSha] = useState(dataSource.fileSha || '');
  const [fileSize, setFileSize] = useState<number | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const updateGitHubFileResult = (result: GitHubFileResult) => {
    setCommitSha(result.commitSha || '');
    setCommitMessage(result.commitMessage || '');
    setTreeSha(result.treeSha || '');
    setFileSha(result.fileSha || '');
    setFileSize(result.fileSize);
    
    if (result.fetchError) {
      setErrorMessage(`Fetch error: ${result.fetchError}`);
    } else if (result.getBranchError) {
      setErrorMessage('Branch not found');
    } else if (result.getCommitError) {
      setErrorMessage('Commit not found');
    } else if (result.getTreeError) {
      setErrorMessage('Tree not found');
    } else {
      setErrorMessage(undefined);
    }

  }
  const onClickLoad = () => {
    if (!owner.value || !repo.value || !branch.value || !path.value) {
      return;
    }
    fetchShas(octokit, owner.value, repo.value, branch.value, path.value, updateGitHubFileResult)
      .catch(error => console.error(error));
  };
  return (
    <div>
      <form>
        <Box display="flex">
          <Box pr={1}>
            <TextStateField textState={owner} onChangeValue={(value) => setOwner({ ...owner, value })} />
          </Box>
          <Box pr={1}>
            <TextStateField textState={repo} onChangeValue={(value) => setRepo({ ...repo, value })} />
          </Box>
          <Box pr={1}>
            <TextStateField textState={branch} onChangeValue={(value) => setBranch({ ...repo, value })} />
          </Box>
          <Box pr={1}>
            <TextStateField textState={path} onChangeValue={(value) => setPath({ ...path, value })} />
          </Box>
          <Button variant="contained" color="primary" onClick={onClickLoad}>
            Load
          </Button>
        </Box>
      </form>
      <Box display="flex" flexDirection="column">
        {errorMessage ? <Box pr={1}><Typography variant="caption">Error: {errorMessage}</Typography></Box> : null}
        {commitSha ? <Box pr={1}><Typography variant="caption">Commit: {commitSha}</Typography></Box> : null}
        {commitMessage ? <Box pr={1}><Typography variant="caption">{commitMessage}</Typography></Box> : null}
        {treeSha ? <Box pr={1}><Typography variant="caption">Tree: {treeSha}</Typography></Box> : null}
        {fileSha ? <Box pr={1}><Typography variant="caption">Blob: {fileSha}</Typography></Box> : null}
        {fileSize ? <Box pr={1}><Typography variant="caption">Size: {fileSize} bytes</Typography></Box> : null}
      </Box>
    </div>
  );
};

export default DataSource;
