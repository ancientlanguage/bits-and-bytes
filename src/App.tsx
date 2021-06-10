import { useState } from 'react';
import theme from './theme';
import { Button, CssBaseline, Select, FormControl, MenuItem, Typography, Container } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { Bar } from 'react-chartjs-2';

function sendRequest(setBytes: (bytes: Uint8Array) => void) {
  const request = new XMLHttpRequest();
  const url = 'https://raw.githubusercontent.com/scott-fleischman/ucd/Unicode-13.0/UnicodeData.txt';
  const isAsync = true;
  request.open('GET', url, isAsync);
  request.responseType = 'arraybuffer';
  const startTime = performance.now();

  request.onload = onLoadRequest(startTime, setBytes, request);

  request.send(null);
}

const onLoadRequest =
  (startTime: number, setBytes: (bytes: Uint8Array) => void, request: XMLHttpRequest) =>
    (_: ProgressEvent<EventTarget>) => {
      const onloadTime = performance.now();
      const loadTime = onloadTime - startTime;
      const url = request.responseURL;
      console.log({ message: 'onload url', url, loadTime });

      const arrayBuffer: ArrayBuffer = request.response;
      if (!arrayBuffer) {
        console.log({ error: 'Unable to load url' });
        return;
      }
      console.log({ byteLength: arrayBuffer.byteLength })

      setBytes(new Uint8Array(arrayBuffer));
    };

const useStyles = makeStyles(() => ({
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  barOptionSelect: {
    marginRight: '12px'
  }
}));

type Info = { label: string; count: number; };
type Scale = 'linear' | 'logarithmic';
type ShowValues = 'all' | 'occurring';

const Loader = () => {
  const [bytes, setBytes] = useState<Uint8Array>(new Uint8Array());
  const [scale, setScale] = useState<Scale>('linear');
  const [showValues, setShowValues] = useState<ShowValues>('all');
  const onClick = () => {
    sendRequest(setBytes);
  };
  const classes = useStyles();

  const infos: Info[] = new Array(256);
  for (let index = 0; index < 256; index++) {
    infos[index] = {
      label: index.toString(),
      count: 0,
    };
  }
  const byteValues = bytes.values();
  for (const byte of byteValues) {
    const existing = infos[byte];
    existing.count = existing.count + 1;
  }
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

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        display: true,
        type: scale,
      },
      y: {
        display: true,
      }
    }
  };

  const handleChangeScale = (event: React.ChangeEvent<{ value: unknown }>) => {
    setScale(event.target.value as Scale);
  };

  const handleChangeShowValues = (event: React.ChangeEvent<{ value: unknown }>) => {
    setShowValues(event.target.value as ShowValues);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={onClick}>
        Bits and Bytes
      </Button>
      <Typography variant="body2" color="textSecondary" align="center">
        {bytes.length + ' bytes'}
      </Typography>

      <div className={classes.chartContainer}>
        <FormControl>
          <Container>
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
    </div>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Loader />
  </ThemeProvider>
);

export default App;
