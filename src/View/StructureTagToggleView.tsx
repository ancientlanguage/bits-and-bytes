import { Box, Typography } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React from 'react';
import { StructureTag } from 'State/Structure';

const getTagText = (tag: StructureTag) => {
  switch (tag) {
    case 'size': return 'Size';
    case 'or': return 'Or';
    case 'and': return 'And';
    case 'list': return 'List';
  }
}

const StructureTagView = (props: { structureTag: StructureTag; setStructureTag: (structureTag: StructureTag) => void; }) => {
  const { structureTag, setStructureTag } = props;

  const items: StructureTag[] = ['size', 'or', 'and', 'list'];
  const makeItemView = (tag: StructureTag) => {
    return (
      <ToggleButton key={tag} value={tag} aria-label={getTagText(tag)}>
        <Typography>{getTagText(tag)}</Typography>
      </ToggleButton>
    );
  };

  const handleChange = (event: React.MouseEvent<HTMLElement>, newTag: string) => {
    setStructureTag(newTag as StructureTag);
  };

  return (
    <Box>
      <ToggleButtonGroup exclusive value={structureTag} onChange={handleChange} aria-label="structure tag">
        {items.map(makeItemView)}
      </ToggleButtonGroup>
    </Box>
  );
}

export default StructureTagView;
