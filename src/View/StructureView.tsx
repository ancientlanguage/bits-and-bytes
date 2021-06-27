import React from 'react';
import { StructureTag } from 'State/Structure';
import StructureTagView from './StructureTagView';

const StructureView = () => {
  const [structureTag, setStructureTag] = React.useState<StructureTag>('atom');

  return (
    <StructureTagView
      structureTag={structureTag}
      setStructureTag={setStructureTag}
    />
  );
}

export default StructureView;
