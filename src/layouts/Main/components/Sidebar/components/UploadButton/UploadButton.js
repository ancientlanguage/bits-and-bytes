import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';

const useStyles = makeStyles(theme => ({
    root: {},
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        color: theme.palette.secondary.dark,
        textTransform: 'none',
        letterSpacing: 0,
        alignItems: 'center',
        width: '100%',
        fontWeight: 900,
        fontSize: 23
    },
    icon: {
        color: theme.palette.secondary.dark,
        width: 24,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
    }
}));

const uploadButton = {
    title: 'Upload File',
    href: '/publishicon',
    icon: <PublishIcon />
};

const UploadButton = props => {
    const classes = useStyles();

    return (
        <Button className={classes.button} to={uploadButton.href}>
            <div className={classes.icon}>{uploadButton.icon}</div>
            {uploadButton.title}
        </Button>
    );
};

UploadButton.propTypes = {
    className: PropTypes.string
};

export default UploadButton;
