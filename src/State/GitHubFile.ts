export type GitHubFileState = {
  save: GitHubFileSave;
  extra: GitHubFileExtra;
};

export type GitHubFileAction = {
  tag: 'setOwner';
  owner?: string;
} | {
  tag: 'setRepo';
  repo?: string;
} | {
  tag: 'setBranch';
  branch?: string;
} | {
  tag: 'setPath';
  path?: string;
} | {
  tag: 'setCommitSha';
  commitSha?: string;
} | {
  tag: 'setTreeSha';
  treeSha?: string;
} | {
  tag: 'setFileSha';
  fileSha?: string;
} | {
  tag: 'setFetchError';
  fetchError?: string;
} | {
  tag: 'setGetBranchError';
  getBranchError?: boolean;
} | {
  tag: 'setCommitMessage';
  commitMessage?: string;
} | {
  tag: 'setGetCommitError';
  getCommitError?: boolean;
} | {
  tag: 'setGetTreeError';
  getTreeError?: boolean;
} | {
  tag: 'setFindFileError';
  findFileError?: boolean;
} | {
  tag: 'setFileSize';
  fileSize?: number;
} | {
  tag: 'startLoading';
} | {
  tag: 'stopLoading';
};

export type GitHubFileSave = {
  owner?: string;
  repo?: string;
  branch?: string;
  path?: string;
  commitSha?: string;
  treeSha?: string;
  fileSha?: string;
};

export type GitHubFileExtra = {
  fetchError?: string;
  getBranchError?: boolean;
  commitMessage?: string;
  getCommitError?: boolean;
  getTreeError?: boolean;
  findFileError?: boolean;
  fileSize?: number;
  loading: boolean;
};

export const gitHubFileReducer = (state: GitHubFileState, action: GitHubFileAction) => {
  switch (action.tag) {
    case 'setOwner':
      return {
        ...state,
        save: {
          ...state.save,
          owner: action.owner
        }
      };
    case 'setRepo':
      return {
        ...state,
        save: {
          ...state.save,
          repo: action.repo
        }
      };
    case 'setBranch':
      return {
        ...state,
        save: {
          ...state.save,
          branch: action.branch
        }
      };
    case 'setPath':
      return {
        ...state,
        save: {
          ...state.save,
          path: action.path
        }
      };
    case 'setCommitSha':
      return {
        ...state,
        save: {
          ...state.save,
          commitSha: action.commitSha
        }
      };
    case 'setTreeSha':
      return {
        ...state,
        save: {
          ...state.save,
          treeSha: action.treeSha
        }
      };
    case 'setFileSha':
      return {
        ...state,
        save: {
          ...state.save,
          fileSha: action.fileSha
        }
      };
    case 'setFetchError':
      return {
        ...state,
        extra: {
          ...state.extra,
          fetchError: action.fetchError,
          loading: false
        }
      };
    case 'setGetBranchError':
      return {
        ...state,
        extra: {
          ...state.extra,
          getBranchError: action.getBranchError,
          loading: false
        }
      };
    case 'setCommitMessage':
      return {
        ...state,
        extra: {
          ...state.extra,
          commitMessage: action.commitMessage
        }
      };
    case 'setGetCommitError':
      return {
        ...state,
        extra: {
          ...state.extra,
          getCommitError: action.getCommitError,
          loading: false
        }
      };
    case 'setGetTreeError':
      return {
        ...state,
        extra: {
          ...state.extra,
          getTreeError: action.getTreeError,
          loading: false
        }
      };
    case 'setFindFileError':
      return {
        ...state,
        extra: {
          ...state.extra,
          findFileError: action.findFileError,
          loading: false
        }
      };
    case 'setFileSize':
      return {
        ...state,
        extra: {
          ...state.extra,
          fileSize: action.fileSize
        }
      };
    case 'startLoading':
      return {
        ...state,
        save: {
          ...state.save,
          commitSha: undefined,
          treeSha: undefined,
          fileSha: undefined
        },
        extra: {
          ...state.extra,
          loading: true,
          fetchError: undefined,
          getBranchError: undefined,
          commitMessage: undefined,
          getCommitError: undefined,
          getTreeError: undefined,
          findFileError: undefined,
          fileSize: undefined
        },
      };
    case 'stopLoading':
      return {
        ...state,
        extra: {
          ...state.extra,
          loading: false
        }
      };
  }
}

export const gitHubFileErrorMessage = (file: GitHubFileState) => {
  if (file.extra.fetchError) {
    return `Fetch error: ${file.extra.fetchError}`;
  } else if (file.extra.getBranchError) {
    return 'Branch not found';
  } else if (file.extra.getCommitError) {
    return 'Commit not found';
  } else if (file.extra.getTreeError) {
    return 'Tree not found';
  }
};