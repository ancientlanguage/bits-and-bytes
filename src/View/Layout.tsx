import { AppBar, Box, ButtonBase, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MouseEvent, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { AppAction, AppState } from 'State/App';
import { SettingsAction } from 'State/Settings';
import Settings from 'View/Settings';
import DataSourceList from './DataSourceList';
import Home from './Home';
import LogoIcon from './LogoIcon';
import StructureView from './StructureView';

function Structures() {
  return <StructureView />;
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

const Layout = (props: { appState: AppState; dispatch: React.Dispatch<AppAction>; }) => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  let history = useHistory();
  let location = useLocation();
  let currentPageName = '';
  switch (location.pathname) {
    case '/':
      currentPageName = 'Home';
      break;
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
    case '/settings':
      currentPageName = 'Settings';
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

  const settingsDispatch: React.Dispatch<SettingsAction> = (value: SettingsAction) => props.dispatch({
    tag: 'updateSettings',
    settingsAction: value
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box marginRight={1}>
            <ButtonBase onClick={() => goToPath('/')}>
              <LogoIcon />
            </ButtonBase>
          </Box>
          <Box display="flex" flexGrow={1}>
            <Button color="inherit" aria-controls="nav-menu" aria-haspopup="true" onClick={handleClick}>
              <Typography>{currentPageName}</Typography> <ExpandMoreIcon />
            </Button>
            <Menu
              id="nav-menu"
              anchorEl={anchorElement}
              keepMounted
              open={Boolean(anchorElement)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => goToPath('/')}>Home</MenuItem>
              <MenuItem onClick={() => goToPath('/data-sources')}>Data Sources</MenuItem>
              <MenuItem onClick={() => goToPath('/structures')}>Structures</MenuItem>
              <MenuItem onClick={() => goToPath('/mappings')}>Mappings</MenuItem>
              <MenuItem onClick={() => goToPath('/chains')}>Chains</MenuItem>
              <MenuItem onClick={() => goToPath('/settings')}>Settings</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/data-sources">
          <DataSourceList />
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
        <Route exact path="/settings">
          <Settings settings={props.appState.settings} dispatch={settingsDispatch} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Layout;
