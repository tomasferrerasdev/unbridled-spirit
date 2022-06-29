import { Box, CircularProgress } from '@mui/material';

export const FullScreenLoading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      height="calc(100vh - 400px)"
    >
      <CircularProgress thickness={2} sx={{ mt: 3 }} />
    </Box>
  );
};
