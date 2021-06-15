import { AppBar, Box, SvgIcon, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import { MouseEvent, useState } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import DataSourceList from './DataSourceList';
import { ReactComponent as LogoIcon } from './logo.svg';

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
    <div>
      <AppBar position="static">
        <Toolbar>
          <SvgIcon component={LogoIcon} viewBox="0 0 60 60" />
          <Box display="flex" flexGrow={1} ml={1}>
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
              <MenuItem onClick={() => goToPath('/data-sources')}>Data Sources</MenuItem>
              <MenuItem onClick={() => goToPath('/structures')}>Structures</MenuItem>
              <MenuItem onClick={() => goToPath('/mappings')}>Mappings</MenuItem>
              <MenuItem onClick={() => goToPath('/chains')}>Chains</MenuItem>
            </Menu>
          </Box>
          <GitHubIcon />
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Redirect to="/data-sources" />
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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Layout;
