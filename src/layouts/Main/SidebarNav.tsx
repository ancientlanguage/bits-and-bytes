import { forwardRef, Ref } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors, Theme } from '@material-ui/core';
import { paletteIcon } from 'theme';

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        color: colors.blueGrey[800],
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
        color: paletteIcon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
    },
    active: {
        'color': theme.palette.primary.main,
        'fontWeight': theme.typography.fontWeightMedium,
        '& $icon': {
            color: theme.palette.primary.main
        }
    }
}));

export type CustomRouterLinkProps = {
    to: string;
    children: any[];
} & Omit<JSX.IntrinsicElements['div'], 'disabled'> & {
    ref?: Ref<HTMLInputElement>
};

const CustomRouterLink = forwardRef<HTMLInputElement, CustomRouterLinkProps>((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
        <RouterLink to={props.to} children={props.children} />
    </div>
));

const SidebarNav = (props: { pages: { title: string, href: string, icon: any }[] }) => {
    const { pages } = props;

    const classes = useStyles();

    return (
        <List className={classes.root}>
            {pages.map((page: { title: string, href: string, icon: any }) => (
                <ListItem className={classes.item} disableGutters key={page.title}>
                    <Button className={classes.button} component={CustomRouterLink} to={page.href}>
                        <div className={classes.icon}>{page.icon}</div>
                        {page.title}
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

SidebarNav.propTypes = {
    className: PropTypes.string,
    pages: PropTypes.array.isRequired
};

export default SidebarNav;
