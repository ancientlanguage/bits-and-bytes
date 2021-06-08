import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, CardActions, Divider, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { data, options } from './chart';

const useStyles = makeStyles(() => ({
    root: {},
    chartContainer: {
        height: 400,
        position: 'relative'
    },
    actions: {
        justifyContent: 'flex-end'
    }
}));

const Data = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <Button size="small" variant="text">
                        Select Data <ArrowDropDownIcon />
                    </Button>
                }
                title="Data"
            />
            <Divider />
            <CardContent>
                <div className={classes.chartContainer}>
                    <Bar type="bar" data={data} options={options} />
                </div>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
                <Button color="primary" size="small" variant="text">
                    Options <ArrowRightIcon />
                </Button>
            </CardActions>
        </Card>
    );
};

export default Data;
