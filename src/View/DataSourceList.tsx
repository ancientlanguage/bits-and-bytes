import { Button, Typography } from "@material-ui/core";
import * as UUID from 'uuid';

const newUuid = (): Uint8Array => {
  const options = {};
  const uuid = new Uint8Array(16);
  UUID.v4(options, uuid);
  return uuid;
};

const DataSourceList = () => {
  const onClick = () => {
    const uuid = newUuid();
    const sources = new Map<Uint8Array, string>();
    sources.set(uuid, 'George')
    const keyString = UUID.stringify(uuid);
    console.log({uuid, sources, keyString});
  };

  return (
    <div>
      <Typography>Data Sources</Typography>
      <Button onClick={onClick}>
        <Typography>Add</Typography>
      </Button>
    </div>
  );
}

export default DataSourceList;
