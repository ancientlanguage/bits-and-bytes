import { Box, Grid, IconButton, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';
import { StructureTag } from 'State/Structure';
import StructureTagToggleView from './StructureTagToggleView';

const parseNaturalNumber = (text: string): number | undefined => {
  if (/^[1-9][0-9]{0,14}$/.test(text)) {
    return Number(text);
  } else {
    return undefined;
  }
}

const SizeTextField = (props: { size: number; setSize: (size: number) => void; }) => {
  const { size, setSize } = props;
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

  return (
    <TextField
      variant="outlined"
      label="Size"
      value={sizeInput}
      onChange={handleSizeInputChange}
      error={hasError}
      helperText={`Positive integer: ${size.toString()}`}
    />
  );
}

const StructureView = () => {
  const [structureTag, setStructureTag] = useState<StructureTag>('or');
  const [sizeValue, setSizeValue] = useState<number>(8);

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
          <SizeTextField size={sizeValue} setSize={setSizeValue} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default StructureView;
