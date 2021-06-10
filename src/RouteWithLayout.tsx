import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = (props: { layout: any, component: any }) => {
    const { layout: Layout, component: Component } = props;

    return (
        <Route
            render={matchProps => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    );
};

RouteWithLayout.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string
};

export default RouteWithLayout;
