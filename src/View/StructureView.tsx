import { Box, Grid, Typography } from '@material-ui/core';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ListIcon from '@material-ui/icons/List';
import PieChartIcon from '@material-ui/icons/PieChart';
import StopIcon from '@material-ui/icons/Stop';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import React from 'react';
import { StructureTag } from 'State/Structure';

const ToggleButtons = (props: { structureTag: StructureTag; setStructureTag: (structureTag: StructureTag) => void; }) => {
  const { structureTag, setStructureTag } = props;

  const handleStructureTag = (event: React.MouseEvent<HTMLElement>, newStructureTag: string | null) => {
    if (newStructureTag !== null) {
      setStructureTag(newStructureTag as StructureTag);
    }
  };

  let structureTagText: string;
  switch (structureTag) {
    case 'atom':
      structureTagText = 'Atom';
      break;
    case 'or':
      structureTagText = 'Or';
      break;
    case 'and':
      structureTagText = 'And';
      break;
    case 'array':
      structureTagText = 'Array';
      break;
  }

  return (
    <Grid
      container
      justify="flex-start"
      alignItems="center"
    >
      <Grid item>
        <ToggleButtonGroup
          value={structureTag}
          exclusive
          onChange={handleStructureTag}
          aria-label="Structure Type"
        >
          <ToggleButton value="atom" aria-label="Atom">
            <StopIcon />
          </ToggleButton>
          <ToggleButton value="or" aria-label="Ar">
            <PieChartIcon />
          </ToggleButton>
          <ToggleButton value="and" aria-label="And">
            <GroupWorkIcon />
          </ToggleButton>
          <ToggleButton value="array" aria-label="Array">
            <ListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item>
        <Box padding={1}>
          <Typography variant="h5">
            {structureTagText}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

const StructureView = () => {
  const [structureTag, setStructureTag] = React.useState<StructureTag>('atom');

  return (
    <ToggleButtons structureTag={structureTag} setStructureTag={setStructureTag} />
  );
}

export default StructureView;
