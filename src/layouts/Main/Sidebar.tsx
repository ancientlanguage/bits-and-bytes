import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Theme } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarNav from './SidebarNav';
import { white } from 'theme';

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        width: 240,
        [theme.breakpoints.up('lg')]: {
            marginTop: 64,
            height: 'calc(100% - 64px)'
        }
    },
    root: {
        backgroundColor: white,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: theme.spacing(2)
    },
    divider: {
        margin: theme.spacing(2, 0)
    },
    uploadButton: {
        color: theme.palette.secondary.dark,
        fontWeight: 700
    },
    uploadIcon: {},
    nav: {
        marginBottom: theme.spacing(2)
    }
}));

const Sidebar = (props: { open: boolean, variant: 'permanent' | 'persistent' | 'temporary', onClose: (event: object) => void }) => {
    const { open, variant, onClose } = props;

    const classes = useStyles();

    const pages: { title: string, href: string, icon: any }[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: <DashboardIcon />
        },
        {
            title: 'Settings',
            href: '/settings',
            icon: <SettingsIcon />
        }
    ];

    return (
        <Drawer anchor="left" classes={{ paper: classes.drawer }} onClose={onClose} open={open} variant={variant}>
            <div className={classes.root}>
                <SidebarNav className={classes.nav} pages={pages} />
            </div>
        </Drawer>
    );
};

Sidebar.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    variant: PropTypes.string.isRequired
};

export default Sidebar;