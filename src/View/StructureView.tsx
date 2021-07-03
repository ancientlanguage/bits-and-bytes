import { Box, Grid, IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState } from 'react';
import { StructureTag } from 'State/Structure';
import StructureTagToggleView from './StructureTagToggleView';

const ComboBox = () => {
  const [structureTag, setStructureTag] = useState<StructureTag>('or');

  return (
    <Grid container alignItems="center">
      <Grid item>
        <IconButton>
          <RemoveCircleIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <StructureTagToggleView
          structureTag={structureTag}
          setStructureTag={setStructureTag}
        />
      </Grid>
    </Grid>
  );
}

const StructureView = () => {
  return (
    <Grid container alignContent="flex-start" direction="column">
      <Grid item><ComboBox /></Grid>
      <Grid item><ComboBox /></Grid>
      <Grid item><ComboBox /></Grid>
      <Grid item>
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default StructureView;
