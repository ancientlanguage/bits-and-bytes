import { Box, Typography } from '@material-ui/core';
import { SettingsState, SettingsAction, GitHubFileAction } from 'AppState';
import DataSource from './DataSource';

const Settings = (props: { settings: SettingsState; dispatch: React.Dispatch<SettingsAction>; }) => {
  const dispatchFileAction: React.Dispatch<GitHubFileAction> = (value: GitHubFileAction) => props.dispatch({
    tag: 'updateFile',
    fileAction: value
  });
  return (
    <Box display="flex" flexDirection="column" margin={2}>
      <Box marginBottom={2}>
        <Typography variant="h6">Source File</Typography>
      </Box>
      <DataSource dataSource={props.settings.file} dispatch={dispatchFileAction}></DataSource>
    </Box>
  );
};

export default Settings;
