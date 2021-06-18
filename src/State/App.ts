import { GitHubFileState } from "./GitHubFile";
import { SettingsAction, SettingsState, settingsStateReducer } from "./Settings";

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
