import { GitHubFileState } from "./GitHubFile";
import { makeOctokit, OctokitDeps, SettingsAction, SettingsState, settingsStateReducer } from "./Settings";

export type AppState = {
  settings: SettingsState;
  dataSources: GitHubFileState[];
};

export const initialSettingsFile: GitHubFileState = {
  save: {
    owner: 'ancientlanguage',
    repo: 'bits-and-bytes-settings',
    branch: 'main',
    path: 'settings.json'
  },
  extra: {
    loading: false
  }
};

export const initialOctokitDeps: OctokitDeps = {
  userAgent: 'Bits and Bytes v1.0'
};

export const initialAppState: AppState = {
  settings: {
    file: initialSettingsFile,
    octokitDeps: initialOctokitDeps,
    octokit: makeOctokit(initialOctokitDeps)
  },
  dataSources: []
};

export type AppAction = {
  tag: 'updateSettings';
  settingsAction: SettingsAction;
} | {
  tag: 'noop';
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
