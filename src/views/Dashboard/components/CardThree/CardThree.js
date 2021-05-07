import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
    content: {
        alignItems: 'center',
        display: 'flex'
    },
    title: {
        fontWeight: 700
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: 56,
        width: 56
    },
    icon: {
        height: 32,
        width: 32
    },
    progress: {
        marginTop: theme.spacing(3)
    }
}));

const CardThree = props => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography className={classes.title} color="textSecondary" gutterBottom variant="body2">
                            CARD 3
                        </Typography>
                    </Grid>
                </Grid>
                <div className={classes.difference}></div>
            </CardContent>
        </Card>
    );
};

CardThree.propTypes = {
    className: PropTypes.string
};

export default CardThree;