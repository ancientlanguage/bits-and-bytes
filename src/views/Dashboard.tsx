import { makeStyles } from '@material-ui/styles';
import { Grid, Theme } from '@material-ui/core';
import Card from './Card';
import Data from './Data';

const useStyles = makeStyles((theme: Theme) => ({
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
                <Grid item lg={12} xl={12}>
                    <Data />
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
