import { useState } from 'react';
import theme from './theme';
import { Button, CssBaseline, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';
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
}));

const Loader = () => {
  const [bytes, setBytes] = useState<Uint8Array>(new Uint8Array());
  const onClick = () => {
    sendRequest(setBytes);
  };
  const classes = useStyles();

  const labels: string[] = new Array(256);
  const counts: number[] = new Array(256);
  for (let index = 0; index < 256; index++) {
    counts[index] = 0;
    labels[index] = index.toString();
  }
  const byteValues = bytes.values();
  for (const byte of byteValues) {
    const existingCount = counts[byte];
    counts[byte] = existingCount + 1;
  }
  
  const data = {
    labels: labels,
    datasets: [{
      label: 'Byte count',
      data: counts,
    }]
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
        <Bar type="bar" data={data} />
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
