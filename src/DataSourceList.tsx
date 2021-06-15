import { Container, Typography } from '@material-ui/core';
import DataSource from './DataSource';

const DataSourceList = () => {
  const settingsDataSource = {
    owner: 'ancientlanguage',
    repo: 'bits-and-bytes-settings',
    branch: 'main',
    path: 'settings.json'
  };
  return (
    <Container>
      <Typography>Settings</Typography>
      <DataSource dataSource={settingsDataSource}></DataSource>
    </Container>
  );
};

export default DataSourceList;
