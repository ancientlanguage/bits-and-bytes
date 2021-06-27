import { Grid, TextField, Tooltip } from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category';
import ListIcon from '@material-ui/icons/List';
import PieChartIcon from '@material-ui/icons/PieChart';
import StopIcon from '@material-ui/icons/Stop';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import React from 'react';
import { StructureTag } from 'State/Structure';

const Metadata = (props: { structureTag: StructureTag; }) => {
  return (
    <TextField />
  );
}

const StructureTagView = (props: { structureTag: StructureTag; setStructureTag: (structureTag: StructureTag) => void; }) => {
  const { structureTag, setStructureTag } = props;

  const handleStructureTag = (event: React.MouseEvent<HTMLElement>, newStructureTag: string | null) => {
    if (newStructureTag !== null) {
      setStructureTag(newStructureTag as StructureTag);
    }
  };

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <ToggleButtonGroup
          value={structureTag}
          exclusive
          onChange={handleStructureTag}
          aria-label="Structure Type"
        >
          <ToggleButton value="atom" aria-label="Atom">
            <Tooltip title="Atom">
              <StopIcon />
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="or" aria-label="Or">
            <Tooltip title="Or">
              <PieChartIcon />
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="and" aria-label="And">
            <Tooltip title="And">
              <CategoryIcon />
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="list" aria-label="List">
            <Tooltip title="List">
              <ListIcon />
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item>
        <Metadata structureTag={structureTag} />
      </Grid>
    </Grid>
  );
}

export default StructureTagView;
