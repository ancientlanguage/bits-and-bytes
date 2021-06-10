import { useState } from 'react';
import theme from './theme';
import { Button, CssBaseline, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Info, ValueCountChart } from './ValueCountChart';

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

const Loader = () => {
  const [bytes, setBytes] = useState<Uint8Array>(new Uint8Array());
  const onClick = () => {
    sendRequest(setBytes);
  };

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

  return (
    <div>
      <Button variant="contained" color="primary" onClick={onClick}>
        Bits and Bytes
      </Button>
      <Typography variant="body2" color="textSecondary" align="center">
        {bytes.length + ' bytes'}
      </Typography>

      <ValueCountChart infos={infos} />
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
