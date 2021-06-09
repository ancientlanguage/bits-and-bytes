import { makeStyles } from '@material-ui/styles';
import { Grid, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={4}
      >
        <Grid
          item
          lg={6}
          xs={12}
        >
          <div className={classes.content}>
            <Typography variant="h1">
              Not Found
            </Typography>
            <Typography variant="subtitle2">
              We're sorry but this page was not found.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;