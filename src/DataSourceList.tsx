import { Container, Typography } from '@material-ui/core';
import { SettingsState, SettingsAction, GitHubFileAction } from 'AppState';
import DataSource from './DataSource';

const DataSourceList = (props: { settings: SettingsState; dispatch: React.Dispatch<SettingsAction>; }) => {
  const dispatchFileAction: React.Dispatch<GitHubFileAction> = (value: GitHubFileAction) => props.dispatch({
    tag: 'updateFile',
    fileAction: value
  });
  return (
    <Container>
      <Typography>Settings</Typography>
      <DataSource dataSource={props.settings.file} dispatch={dispatchFileAction}></DataSource>
    </Container>
  );
};

export default DataSourceList;
