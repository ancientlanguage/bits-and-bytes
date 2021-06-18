export type AppState = {
  settings: SettingsState;
  dataSources: GitHubFileState[];
};

export const initialAppState: AppState = {
  settings: {
    file: {
      save: {
        owner: 'ancientlanguage',
        repo: 'bits-and-bytes-settings',
        branch: 'main',
        path: 'settings.json'
      },
      extra: {}
    }
  },
  dataSources: []
};

export type AppAction = {
  tag: 'updateSettings';
  settingsAction: SettingsAction;
} | {
  tag: 'noop';
};

export type SettingsAction = {
  tag: 'updateFile';
  fileAction: GitHubFileAction;
} | {
  tag: 'updateToken';
};

export const settingsStateReducer = (state: SettingsState, action: SettingsAction) => {
  switch (action.tag) {
    case 'updateFile':
      return {
        ...state,
        file: gitHubFileReducer(state.file, action.fileAction)
      };
    case 'updateToken':
      // TODO
      return state;
  }
};

export const appStateReducer = (state: AppState, action: AppAction) => {
  switch (action.tag) {
    case 'updateSettings':
      return {
        ...state,
        settings: settingsStateReducer(state.settings, action.settingsAction)
      };
    case 'noop':
      return state;
  }
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
          fetchError: action.fetchError
        }
      };
    case 'setGetBranchError':
      return {
        ...state,
        extra: {
          ...state.extra,
          getBranchError: action.getBranchError
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
          getCommitError: action.getCommitError
        }
      };
    case 'setGetTreeError':
      return {
        ...state,
        extra: {
          ...state.extra,
          getTreeError: action.getTreeError
        }
      };
    case 'setFindFileError':
      return {
        ...state,
        extra: {
          ...state.extra,
          findFileError: action.findFileError
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
  }
}

export type SettingsState = {
  file: GitHubFileState;
};

export type SettingsData = {
  updatedAt: string;
};

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
};
