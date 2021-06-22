import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import { Structure, StructureTag } from "State/Structure";
import * as UUID from 'uuid';

const StructureKindSelect = (props: { tag: StructureTag; setTag: (tag: StructureTag) => void; }) => {
  const [labelId] = useState<string>(() => UUID.v4());
  const [selectId] = useState<string>(() => UUID.v4());
  const { tag, setTag } = props;
  return (
    <FormControl>
      <InputLabel shrink id={labelId}>
        Structure
      </InputLabel>
      <Select
        labelId={labelId}
        id={selectId}
        value={tag}
        onChange={(event) => setTag(event.target.value as StructureTag)}
      >
        <MenuItem value="atom">Atom</MenuItem>
        <MenuItem value="or">Or</MenuItem>
        <MenuItem value="and">And</MenuItem>
      </Select>
    </FormControl>
  );
}

const SubStructures = (props: { direction: 'vertical' | 'horizontal'; structures: string[] }) => {
  return (
    <Box margin={1}>
      <Button>
        <AddIcon />
      </Button>
    </Box>
  );
};

type StructureInterface = {
  getStructure: (structureId: string) => Structure | undefined;
  upsertStructure: (structureId: string, structure: Structure) => void;
};

const StructureView = () => {
  // const [structure, setStructure] = useState<Structure>(() => newDefaultStructure(100));
  const [structureTag, setStructureTag] = useState<StructureTag>('atom');
  let childComponent;
  switch (structureTag) {
    case 'or':
      childComponent = (<SubStructures direction="horizontal" structures={[]} />);
      break;
    case 'and':
      childComponent = (<SubStructures direction="vertical" structures={[]} />);
      break;
  }
  return (
    <Box border={1} margin={1} padding={1}>
      <StructureKindSelect tag={structureTag} setTag={setStructureTag} />
      {childComponent}
    </Box>
  );
};

export default StructureView;
