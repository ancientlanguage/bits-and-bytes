import { useState } from 'react';
import theme from './theme';
import { Button, CssBaseline, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

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
  const [getBytes, setBytes] = useState<Uint8Array>(new Uint8Array());
  const onClick = () => {
    sendRequest(setBytes);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={onClick}>
        Bits and Bytes
      </Button>
      <Typography variant="body2" color="textSecondary" align="center">
        {getBytes.length + ' bytes'} 
      </Typography>
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
