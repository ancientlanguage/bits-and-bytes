import { Box, Typography } from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category';
import ListIcon from '@material-ui/icons/List';
import PieChartIcon from '@material-ui/icons/PieChart';
import StopIcon from '@material-ui/icons/Stop';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React from 'react';
import { StructureTag } from 'State/Structure';

const getTagText = (tag: StructureTag) => {
  switch (tag) {
    case 'atom': return 'Atom';
    case 'or': return 'Or';
    case 'and': return 'And';
    case 'list': return 'List';
  }
}

const getTagIcon = (tag: StructureTag) => {
  switch (tag) {
    case 'atom': return <StopIcon />;
    case 'or': return <PieChartIcon />;
    case 'and': return <CategoryIcon />;
    case 'list': return <ListIcon />;
  }
}

const makeTagDescription = (tag: StructureTag) => {
  return (<>
    {getTagIcon(tag)}
    <Box marginLeft={1}><Typography>{getTagText(tag)}</Typography></Box>
  </>);
};

const StructureTagView = (props: { structureTag: StructureTag; setStructureTag: (structureTag: StructureTag) => void; }) => {
  const { structureTag, setStructureTag } = props;

  const items: StructureTag[] = ['atom', 'or', 'and', 'list'];
  const makeItemView = (tag: StructureTag) => {
    return (
      <ToggleButton key={tag} value={tag} aria-label={getTagText(tag)}>
        {makeTagDescription(tag)}
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
