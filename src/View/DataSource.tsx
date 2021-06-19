import { Box, Button, CircularProgress, Popover, TextField, Typography } from "@material-ui/core";
import { Octokit } from '@octokit/rest';
import { useState } from "react";
import { GitHubFileAction, gitHubFileErrorMessage, GitHubFileState } from 'State/GitHubFile';
import InfoIcon from '@material-ui/icons/Info';

const TextStateField = (props: { label: string; value: string | undefined; onChangeValue: (value: string) => void; }) => {
  const { label, value, onChangeValue } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(event.target.value);
  };
  return (
    <TextField
      label={label}
      value={value || ''}
      onChange={handleChange}
      variant="outlined"
    />
  );
};

const fetchShas = async (octokit: Octokit,
  owner: string,
  repo: string,
  branch: string,
  path: string,
  dispatch: React.Dispatch<GitHubFileAction>
) => {
  dispatch({ tag: 'startLoading' });
  const getBranchResult = await octokit.rest.repos.getBranch({ owner, repo, branch })
    .catch((error) => {
      dispatch({ tag: 'setFetchError', fetchError: error.toString() });
      dispatch({ tag: 'setGetBranchError', getBranchError: true });
    });
  if (!getBranchResult) {
    dispatch({ tag: 'setGetBranchError', getBranchError: true });
    return;
  }
  const commitSha = getBranchResult.data.commit.sha;
  dispatch({ tag: 'setCommitSha', commitSha });

  const getCommitResult = await octokit.rest.repos.getCommit({ owner, repo, ref: commitSha })
    .catch((error) => {
      dispatch({ tag: 'setFetchError', fetchError: error.toString() });
      dispatch({ tag: 'setGetCommitError', getCommitError: true });
    });
  if (!getCommitResult) {
    dispatch({ tag: 'setGetCommitError', getCommitError: true });
    return;
  }
  dispatch({ tag: 'setCommitMessage', commitMessage: getCommitResult.data.commit.message });
  const treeSha = getCommitResult.data.commit.tree.sha;
  dispatch({ tag: 'setTreeSha', treeSha });

  const getTreeResult = await octokit.rest.git.getTree({ owner, repo, tree_sha: treeSha })
    .catch((error) => {
      dispatch({ tag: 'setFetchError', fetchError: error.toString() });
      dispatch({ tag: 'setGetTreeError', getTreeError: true });
    });
  if (!getTreeResult) {
    dispatch({ tag: 'setGetTreeError', getTreeError: true });
    return;
  }

  const fileData = getTreeResult.data.tree.find((item) => item.path === path);
  if (!fileData) {
    dispatch({ tag: 'setFindFileError', findFileError: true });
    return;
  }
  dispatch({ tag: 'setFileSha', fileSha: fileData.sha });
  dispatch({ tag: 'setFileSize', fileSize: fileData.size });
  dispatch({ tag: 'stopLoading' });
};

const DataSource = (props:
  {
    dataSource: GitHubFileState;
    dispatch: React.Dispatch<GitHubFileAction>;
    octokit: Octokit;
  }) => {
  const { dataSource, dispatch, octokit } = props;
  const { owner, repo, branch, path, commitSha, treeSha, fileSha } = dataSource.save;
  const { commitMessage, fileSize, loading } = dataSource.extra;
  const [infoAnchorElement, setInfoAnchorElement] = useState<HTMLButtonElement | null>(null);

  const infoOpen = Boolean(infoAnchorElement);
  const infoId = infoOpen ? 'data-source-info' : undefined;
  const errorMessage = gitHubFileErrorMessage(dataSource);
  const hasError = Boolean(errorMessage);
  const hasAnyInfo =
    Boolean(errorMessage) ||
    Boolean(commitSha) ||
    Boolean(commitMessage) ||
    Boolean(treeSha) ||
    Boolean(fileSha) ||
    Boolean(fileSize);
  const hasFullInfo = Boolean(fileSize);
  const infoColor =
    loading ? 'disabled'
      : hasError ? 'error'
        : hasFullInfo ? 'primary'
          : 'inherit';

  const handleClickInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setInfoAnchorElement(event.currentTarget);
  };

  const handleCloseInfo = () => {
    setInfoAnchorElement(null);
  };

  const onClickLoad = () => {
    if (!owner || !repo || !branch || !path || loading) {
      return;
    }
    fetchShas(octokit, owner, repo, branch, path, dispatch)
      .catch(error => console.error(error));
  };
  const loadingIndicator =
    loading ?
      (<CircularProgress />)
      : null;
  return (
    <div>
      <form>
        <Box display="flex">
          <Box paddingRight={1}>
            <TextStateField label="Owner" value={owner} onChangeValue={(value) => dispatch({ tag: 'setOwner', owner: value })} />
          </Box>
          <Box paddingRight={1}>
            <TextStateField label="Repo" value={repo} onChangeValue={(value) => dispatch({ tag: 'setRepo', repo: value })} />
          </Box>
          <Box paddingRight={1}>
            <TextStateField label="Branch" value={branch} onChangeValue={(value) => dispatch({ tag: 'setBranch', branch: value })} />
          </Box>
          <Box paddingRight={1}>
            <TextStateField label="Path" value={path} onChangeValue={(value) => dispatch({ tag: 'setPath', path: value })} />
          </Box>
          <Box paddingRight={1}>
            <Button variant="contained" color="primary" onClick={onClickLoad} disabled={loading}>
              Load
            </Button>
          </Box>
          <div>
            <Button aria-describedby={infoId} onClick={handleClickInfo} disabled={!hasAnyInfo}>
              <InfoIcon color={infoColor} />
            </Button>
            <Popover
              id={infoId}
              open={infoOpen}
              anchorEl={infoAnchorElement}
              onClose={handleCloseInfo}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box display="flex" flexDirection="column" margin={1}>
                {errorMessage ? <Box pr={1}><Typography variant="caption">Error: {errorMessage}</Typography></Box> : null}
                {commitSha ? <Box pr={1}><Typography variant="caption">Commit: {commitSha}</Typography></Box> : null}
                {commitMessage ? <Box pr={1}><Typography variant="caption">Commit Message: {commitMessage}</Typography></Box> : null}
                {treeSha ? <Box pr={1}><Typography variant="caption">Tree: {treeSha}</Typography></Box> : null}
                {fileSha ? <Box pr={1}><Typography variant="caption">Blob: {fileSha}</Typography></Box> : null}
                {fileSize ? <Box pr={1}><Typography variant="caption">Size: {fileSize} bytes</Typography></Box> : null}
              </Box>
            </Popover>
          </div>
          {loadingIndicator}
        </Box>
      </form>
    </div>
  );
};

export default DataSource;
