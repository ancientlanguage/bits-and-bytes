import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
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
        backgroundColor: theme.palette.error.main,
        height: 56,
        width: 56
    },
    icon: {
        height: 32,
        width: 32
    },
    difference: {
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center'
    },
    differenceIcon: {
        color: theme.palette.error.dark
    },
    differenceValue: {
        color: theme.palette.error.dark,
        marginRight: theme.spacing(1)
    }
}));

const CardOne = (props: { name: string }) => {
    const classes = useStyles();
    const { name } = props;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography className={classes.title} color="textSecondary" gutterBottom variant="body2">
                            {name}
                        </Typography>
                    </Grid>
                </Grid>
                <div className={classes.difference}></div>
            </CardContent>
        </Card>
    );
};

CardOne.propTypes = {
    className: PropTypes.string
};

export default CardOne;
