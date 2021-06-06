import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { CardOne, CardTwo, CardThree, CardFour, Data } from './components';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    }
}));

const Dashboard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <CardOne />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <CardTwo />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <CardThree />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <CardFour />
                </Grid>
                <Grid item lg={12} md={18} xl={12} xs={24}>
                    <Data />
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
