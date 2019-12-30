import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        backgroundColor: theme.palette.white,
        color: theme.palette.primary.contrastText
    },
    content: {
        alignItems: 'center',
        display: 'flex'
    },
    title: {
        fontWeight: 700
    },
    avatar: {
        backgroundColor: theme.palette.white,
        color: theme.palette.primary.main,
        height: 56,
        width: 56
    },
    icon: {
        height: 32,
        width: 32
    }
}));

const CardFour = props => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography className={classes.title} color="textSecondary" gutterBottom variant="body2">
                            CARD 4
                        </Typography>
                    </Grid>
                </Grid>
                <div className={classes.difference}></div>
            </CardContent>
        </Card>
    );
};

CardFour.propTypes = {
    className: PropTypes.string
};

export default CardFour;
