import { Box, Button, Grid, IconButton, Menu, MenuItem, TextField, Typography } from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';
import ListIcon from '@material-ui/icons/List';
import PieChartIcon from '@material-ui/icons/PieChart';
import StopIcon from '@material-ui/icons/Stop';
import React, { useState } from 'react';
import { StructureTag } from 'State/Structure';
import * as UUID from 'uuid';

const Metadata = (props: { structureTag: StructureTag; }) => {
  return (
    <TextField error />
  );
}

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
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [menuId] = useState<string>(() => UUID.v4());

  const handleStructureTag = (event: React.MouseEvent<HTMLElement>, tag: StructureTag) => {
    setStructureTag(tag);
    setAnchorElement(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const menuItems: StructureTag[] = ['atom', 'or', 'and', 'list'];
  const makeMenuItem = (tag: StructureTag) => {
    return (
      <MenuItem key={tag} onClick={(e) => handleStructureTag(e, tag)}>{makeTagDescription(tag)} </MenuItem>
    );
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
        <Button color="inherit" aria-controls={menuId} aria-haspopup="true" onClick={handleClick} variant="outlined">
          {makeTagDescription(structureTag)} <ExpandMoreIcon />
        </Button>
        <Menu
          id={menuId}
          anchorEl={anchorElement}
          keepMounted
          open={Boolean(anchorElement)}
          onClose={handleClose}
        >
          {menuItems.map((i) => makeMenuItem(i))}
        </Menu>
      </Grid>
      <Grid item>
        <Metadata structureTag={structureTag} />
      </Grid>
      <Grid item>
        <IconButton>
          <InfoIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default StructureTagView;
