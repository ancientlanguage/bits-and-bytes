import { Box, Grid, TextField } from '@material-ui/core';
import { useState } from 'react';
import { StructurePart, StructureTag } from 'State/Structure';
import StructureTagToggleView from './StructureTagToggleView';

const parseNaturalNumber = (text: string): number | undefined => {
  if (/^[1-9][0-9]{0,14}$/.test(text)) {
    return Number(text);
  } else {
    return undefined;
  }
}

const SizeTextField = (props: { readOnly: boolean; size: number; setSize: (size: number) => void; }) => {
  const { readOnly, size, setSize } = props;
  const [sizeInput, setSizeInput] = useState<string>(() => size.toString());
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSizeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = event.target.value;
    setSizeInput(newInput);

    const parsedNumber = parseNaturalNumber(newInput);
    if (parsedNumber) {
      setSize(parsedNumber);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  let shownText: string;
  let shownError: boolean;
  let helperText: string | undefined;
  if (readOnly) {
    shownText = size.toString();
    shownError = false;
    helperText = undefined;
  } else {
    shownText = sizeInput;
    shownError = hasError;
    helperText = hasError ? "Positive integer" : undefined;
  }

  return (
    <TextField
      variant="outlined"
      label="Size"
      value={shownText}
      onChange={handleSizeInputChange}
      error={shownError}
      helperText={helperText}
      InputProps={{ readOnly }}
    />
  );
}

const StructurePartView = (props: { depth: number; structurePart: StructurePart; setStructurePart: (structurePart: StructurePart) => void; }) => {
  const { structurePart, setStructurePart } = props;
  const structureTag = structurePart.tag;
  let readOnly: boolean;
  let size: number;
  let setSize: (size: number) => void;
  switch (structurePart.tag) {
    case 'size':
      readOnly = false;
      size = structurePart.size;
      setSize = (size: number) => setStructurePart({ ...structurePart, size });
      break;
    case 'or':
      readOnly = true;
      size = 42;
      setSize = (_) => { };
      break;
    case 'and':
      readOnly = true;
      size = 43;
      setSize = (_) => { };
      break;
    case 'list':
      readOnly = true;
      size = 44;
      setSize = (_) => { };
      break;
  }

  const setStructureTag = (structureTag: StructureTag) => {
    switch (structureTag) {
      case 'size':
        setStructurePart({ tag: 'size', size });
        break;
      case 'or':
        setStructurePart({ tag: 'or', parts: [] });
        break;
      case 'and':
        setStructurePart({ tag: 'and', parts: [] });
        break;
      case 'list':
        setStructurePart({ tag: 'list', count: 8, item: { tag: 'size', size: 2 } });
        break;
    }
  }

  return (
    <Box margin={1}>
      <Grid container alignContent="flex-start" alignItems="center" direction="row" spacing={1}>
        <Grid item>
          <StructureTagToggleView
            structureTag={structureTag}
            setStructureTag={setStructureTag}
          />
        </Grid>
        <Grid item>
          <SizeTextField readOnly={readOnly} size={size} setSize={setSize} />
        </Grid>
      </Grid>
    </Box>
  );
}

const StructureView = () => {
  const [structurePart, setStructurePart] = useState<StructurePart>(() => ({ tag: 'size', size: 8 }));
  return (
    <StructurePartView depth={0} structurePart={structurePart} setStructurePart={setStructurePart} />
  );
}

export default StructureView;
