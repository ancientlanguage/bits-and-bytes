import { Box } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import React from 'react';
import { StructureTag } from 'State/Structure';
import StructureTagView from './StructureTagView';

const StructureView = () => {
  const [structureTag, setStructureTag] = React.useState<StructureTag>('atom');
  const [structureTag2, setStructureTag2] = React.useState<StructureTag>('atom');
  const [structureTag3, setStructureTag3] = React.useState<StructureTag>('atom');

  const ignoreLabelClick = (event: React.MouseEvent<Element>) => {
    event.preventDefault();
  }

  return (
    <Box display="flex" flexDirection="column">
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" onLabelClick={ignoreLabelClick} label={
          <StructureTagView
            structureTag={structureTag}
            setStructureTag={setStructureTag}
          />
        }>
          <TreeItem nodeId="2" onLabelClick={ignoreLabelClick} label={
            <StructureTagView
              structureTag={structureTag2}
              setStructureTag={setStructureTag2}
            />
          }
          />
          <TreeItem nodeId="3" onLabelClick={ignoreLabelClick} label={
            <StructureTagView
              structureTag={structureTag3}
              setStructureTag={setStructureTag3}
            />
          }
          />
        </TreeItem>
      </TreeView>
    </Box>
  );
}

export default StructureView;
