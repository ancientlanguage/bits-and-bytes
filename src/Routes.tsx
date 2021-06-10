import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './RouteWithLayout';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import Dashboard from './views/Dashboard';
import Settings from './views/Settings';
import NotFound from './views/NotFound';

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <RouteWithLayout component={Dashboard} layout={MainLayout} path="/dashboard" />
            <RouteWithLayout component={Settings} layout={MainLayout} path="/settings" />
            <RouteWithLayout component={NotFound} layout={MinimalLayout} path="/not-found" />
            <Redirect to="/not-found" />
        </Switch>
    );
};

export default Routes;
