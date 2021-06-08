import { makeStyles } from '@material-ui/styles';
import { Grid, Theme } from '@material-ui/core';

import Notifications from './Notifications';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4)
    }
}));

const Settings = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item md={7} xs={12}>
                    <Notifications />
                </Grid>
            </Grid>
        </div>
    );
};

export default Settings;
