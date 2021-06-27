import { Box } from '@material-ui/core';
import React from 'react';
import { StructureTag } from 'State/Structure';
import StructureTagView from './StructureTagView';

const StructureView = () => {
  const [structureTag, setStructureTag] = React.useState<StructureTag>('atom');
  const [structureTag2, setStructureTag2] = React.useState<StructureTag>('atom');
  const [structureTag3, setStructureTag3] = React.useState<StructureTag>('atom');

  return (
    <Box display="flex" flexDirection="column">
      <StructureTagView
        structureTag={structureTag}
        setStructureTag={setStructureTag}
      />
      <StructureTagView
        structureTag={structureTag2}
        setStructureTag={setStructureTag2}
      />
      <StructureTagView
        structureTag={structureTag3}
        setStructureTag={setStructureTag3}
      />
    </Box>
  );
}

export default StructureView;
