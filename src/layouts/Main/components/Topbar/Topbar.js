import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none'
    },
    siteTitle: {
        padding: 10,
        fontSize: 25,
        fontWeight: 900,
        color: theme.palette.white
    },
    upload: {
        padding: 1,
        fontSize: 25,
        fontWeight: 900,
        color: theme.palette.white
    },
    flexGrow: {
        flexGrow: 1
    }
}));

const Topbar = props => {
    const { onSidebarOpen } = props;

    const classes = useStyles();

    // const inputRef = createRef();
    // let [file, setFile] = useState();

    // const handleClickEvent = event => {
    //     event.stopPropagation();
    //     event.preventDefault();
    //     setFile((file = event.target.files[0]));
    //     onSelectFile(file);
    // };

    //const [notifications] = useState([]);

    return (
        <AppBar className={classes.root}>
            <Toolbar>
                <RouterLink to="/">
                    <img alt="Logo" src="/images/logos/zeros-and-ones.svg" />
                </RouterLink>
                <Typography className={classes.siteTitle}>Bits and Bytes</Typography>
                <div className={classes.flexGrow} />
                <Hidden lgUp>
                    <IconButton color="inherit" onClick={onSidebarOpen}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

Topbar.propTypes = {
    className: PropTypes.string,
    onSidebarOpen: PropTypes.func
};

export default Topbar;
