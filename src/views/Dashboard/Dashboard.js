import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Card, Data } from './components';

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
                    <Card name="CARD 1" />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <Card name="CARD 2" />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <Card name="CARD 3" />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                    <Card name="CARD 4" />
                </Grid>
                <Grid item lg={12} md={18} xl={12} xs={24}>
                    <Data />
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
