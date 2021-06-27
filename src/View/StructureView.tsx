import { Grid } from '@material-ui/core';
import React from 'react';
import { StructureTag } from 'State/Structure';
import StructureTagView from './StructureTagView';

const StructureView = () => {
  const [structureTag, setStructureTag] = React.useState<StructureTag>('atom');
  const [structureTag2, setStructureTag2] = React.useState<StructureTag>('atom');
  const [structureTag3, setStructureTag3] = React.useState<StructureTag>('atom');

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <StructureTagView
          structureTag={structureTag}
          setStructureTag={setStructureTag}
        />
      </Grid>
      <Grid item>
        <StructureTagView
          structureTag={structureTag2}
          setStructureTag={setStructureTag2}
        />
      </Grid>
      <Grid item>
        <StructureTagView
          structureTag={structureTag3}
          setStructureTag={setStructureTag3}
        />
      </Grid>
    </Grid>
  );
}

export default StructureView;
