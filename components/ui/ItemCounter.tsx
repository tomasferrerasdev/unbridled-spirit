import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {}

export const ItemCounter: FC<Props> = () => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton>
        <Box display="flex" gap={1}>
          <Typography variant="body1">remove</Typography>
          <RemoveCircleOutline />
        </Box>
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}>1</Typography>
      <IconButton>
        <Box display="flex" gap={1}>
          <AddCircleOutline />
          <Typography variant="body1">add</Typography>
        </Box>
      </IconButton>
    </Box>
  );
};
