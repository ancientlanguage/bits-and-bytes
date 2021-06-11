import theme from './theme';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Loader from './Loader';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Loader />
  </ThemeProvider>
);

export default App;
