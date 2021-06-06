import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, CardActions, Grid, Divider, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {},
    item: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

const Notifications = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <form>
                <CardHeader subheader="Manage notifications" title="Notifications" />
                <Divider />
                <CardContent>
                    <Grid container spacing={6} wrap="wrap">
                        <Grid className={classes.item} item md={4} sm={6} xs={12}>
                            <Typography gutterBottom variant="h6">
                                Notifications Settings Here
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button color="primary" variant="outlined">
                        Save
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};

Notifications.propTypes = {
    className: PropTypes.string
};

export default Notifications;
