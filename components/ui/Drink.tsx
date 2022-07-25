import { Box, Typography } from '@mui/material';

export const Drink = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundColor: '#9e1506',
        position: 'absolute',
        width: '100%',
      }}
    >
      <Box display="flex" flexDirection="column" padding=".3rem">
        <Typography
          fontSize={18}
          fontWeight={700}
          color="#ffffff"
          lineHeight="110%"
        >
          ¡Let&apos;s drink responsibly!
        </Typography>
      </Box>
    </Box>
  );
};
