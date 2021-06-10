import { useState } from 'react';
import { Select, FormControl, MenuItem, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles(() => ({
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  barOptionSelect: {
    marginRight: '12px'
  }
}));

export type Info = { label: string; count: number; };

type Scale = 'linear' | 'logarithmic';
type ShowValues = 'all' | 'occurring';
type BarDirection = 'vertical' | 'horizontal';

export const ValueCountChart = (props: { infos: Info[] }) => {
  const { infos } = props;
  const [scale, setScale] = useState<Scale>('linear');
  const [showValues, setShowValues] = useState<ShowValues>('all');
  const [barDirection, setBarDirection] = useState<BarDirection>('vertical');
  const classes = useStyles();

  let infosToShow: Info[];
  switch (showValues) {
    case 'all':
      infosToShow = infos;
      break;
    case 'occurring':
      infosToShow = infos.filter((info: Info) => info.count > 0);
      break;
  }

  const data = {
    labels: infosToShow.map((info: Info) => info.label),
    datasets: [{
      label: 'Count',
      data: infosToShow.map((info: Info) => info.count),
    }]
  };

  let options: any = {
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      }
    }
  };
  switch (barDirection) {
    case 'vertical':
      options.indexAxis = 'x';
      options.scales.y.type = scale;
      break;
    case 'horizontal':
      options.indexAxis = 'y';
      options.scales.x.type = scale;
      break;
  }

  const handleChangeScale = (event: React.ChangeEvent<{ value: unknown }>) => {
    setScale(event.target.value as Scale);
  };

  const handleChangeShowValues = (event: React.ChangeEvent<{ value: unknown }>) => {
    setShowValues(event.target.value as ShowValues);
  };

  const handleChangeBarDirection = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBarDirection(event.target.value as BarDirection);
  };

  return (
    <div className={classes.chartContainer}>
      <FormControl>
        <Container>
          <Select
            id="bar-direction"
            value={barDirection}
            onChange={handleChangeBarDirection}
            className={classes.barOptionSelect}
          >
            <MenuItem value={'vertical'}>Vertical</MenuItem>
            <MenuItem value={'horizontal'}>Horizontal</MenuItem>
          </Select>
          <Select
            id="bar-scale"
            value={scale}
            onChange={handleChangeScale}
            className={classes.barOptionSelect}
          >
            <MenuItem value={'linear'}>Linear</MenuItem>
            <MenuItem value={'logarithmic'}>Logarithmic</MenuItem>
          </Select>
          <Select
            id="bar-values"
            value={showValues}
            onChange={handleChangeShowValues}
            className={classes.barOptionSelect}
          >
            <MenuItem value={'all'}>All Values</MenuItem>
            <MenuItem value={'occurring'}>Occurring Values</MenuItem>
          </Select>
        </Container>
      </FormControl>
      <Bar type="bar" data={data} options={options} />
    </div>
  );
};
