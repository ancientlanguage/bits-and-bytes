export type Settings = {
  updatedAt: string;
  dataSources: GitHubFile[];
};

export type GitHubFile = {
  owner?: string;
  repo?: string;
  branch?: string;
  path?: string;
  commitSha?: string;
  treeSha?: string;
  fileSha?: string;
};

export type GitHubFileResult = {
  fetchError?: string;
  getBranchError?: boolean;
  commitSha?: string;
  commitMessage?: string;
  getCommitError?: boolean;
  treeSha?: string;
  getTreeError?: boolean;
  findFileError?: boolean;
  fileSha?: string;
  fileSize?: number;
};
