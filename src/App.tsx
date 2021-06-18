import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Layout from 'Layout';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import { useReducer } from "react";
import { appStateReducer, initialAppState } from './AppState';

const App = () => {
  const [appState, dispatch] = useReducer(appStateReducer, initialAppState);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout appState={appState} dispatch={dispatch} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
