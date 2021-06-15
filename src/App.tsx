import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Layout from 'Layout';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
