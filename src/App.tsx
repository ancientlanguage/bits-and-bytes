import theme from './theme';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useState, MouseEvent } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function DataSources() {
  return <Typography>Data Sources</Typography>;
}

function Structures() {
  return <Typography>Structures</Typography>;
}

function Mappings() {
  return <Typography>Mappings</Typography>;
}

function Chains() {
  return <Typography>Chains</Typography>;
}

function NotFound() {
  return <Typography>Not Found</Typography>;
}

const Layout = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  let history = useHistory();
  let location = useLocation();
  let currentPageName = '';
  switch (location.pathname) {
    case '/data-sources':
      currentPageName = 'Data Sources';
      break;
    case '/structures':
      currentPageName = 'Structures';
      break;
    case '/mappings':
      currentPageName = 'Mappings';
      break;
    case '/chains':
      currentPageName = 'Chains';
      break;
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const goToPath = (path: string) => {
    history.push(path);
    setAnchorElement(null);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <Container>
      <Button aria-controls="nav-menu" aria-haspopup="true" onClick={handleClick}>
        {currentPageName} <ExpandMoreIcon />
      </Button>
      <Menu
        id="nav-menu"
        anchorEl={anchorElement}
        keepMounted
        open={Boolean(anchorElement)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => goToPath('/data-sources')}>Data Sources</MenuItem>
        <MenuItem onClick={() => goToPath('/structures')}>Structures</MenuItem>
        <MenuItem onClick={() => goToPath('/mappings')}>Mappings</MenuItem>
        <MenuItem onClick={() => goToPath('/chains')}>Chains</MenuItem>
      </Menu>

      <Switch>
        <Route exact path="/">
          <Redirect to="/data-sources" />
        </Route>
        <Route exact path="/data-sources">
          <DataSources />
        </Route>
        <Route exact path="/structures">
          <Structures />
        </Route>
        <Route exact path="/mappings">
          <Mappings />
        </Route>
        <Route exact path="/chains">
          <Chains />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
};

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
