import { Octokit } from "@octokit/rest";
import { GitHubFileAction, gitHubFileReducer, GitHubFileState } from "./GitHubFile";

export const makeOctokit = (deps: OctokitDeps) => {
  return new Octokit({
    userAgent: deps.userAgent,
    auth: deps.auth
  })
};

export type SettingsState = {
  file: GitHubFileState;
  octokitDeps: OctokitDeps;
  octokit: Octokit;
};

export type OctokitDeps = {
  userAgent: string;
  auth?: string;
}

export type SettingsData = {
  updatedAt: string;
};

export type SettingsAction = {
  tag: 'updateFile';
  fileAction: GitHubFileAction;
} | {
  tag: 'setGitHubAuth';
  auth?: string;
};

export const settingsStateReducer = (state: SettingsState, action: SettingsAction) => {
  switch (action.tag) {
    case 'updateFile':
      return {
        ...state,
        file: gitHubFileReducer(state.file, action.fileAction)
      };
    case 'setGitHubAuth':
      const octokitDeps = {
        ...state.octokitDeps,
        auth: action.auth
      };
      return {
        ...state,
        octokitDeps,
        octokit: makeOctokit(octokitDeps)
      };
  }
};
