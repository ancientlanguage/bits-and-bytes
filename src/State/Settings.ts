import { GitHubFileAction, gitHubFileReducer, GitHubFileState } from "./GitHubFile";

export type SettingsState = {
  file: GitHubFileState;
};

export type SettingsData = {
  updatedAt: string;
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
