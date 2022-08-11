import { Box, Button, Typography } from '@mui/material';
export const HeroSection = () => {
  return (
    <>
      <Box
        display="flex"
        sx={{
          flexDirection: { sm: 'column', md: 'row' },
          mt: { xs: 15, md: 10 },
        }}
        justifyContent="space-between"
        alignItems="center"
        height="calc(100vh - 200px)"
        position="relative"
        mb={15}
        gap={1}
      >
        <Box flex={1} width="100%">
          <Box display="flex" flexDirection="column" mb={2}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: {
                  xs: '3.2rem',
                  sm: '4rem',
                  md: 'calc(4rem + 1.5vw)',
                },
              }}
            >
              Unbridled Spirit
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: {
                  xs: '3.2rem',
                  sm: '4rem',
                  md: 'calc(4rem + 1.5vw)',
                },
              }}
            >
              Bourbon shop
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" mb={4}>
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              Order Bourbon Online and have it delivered directly to your door.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              Buy bourbon online today. Large selection of Single Batch Bourbon,
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              Tennessee whiskies and more.
            </Typography>
          </Box>
          <Button sx={{ width: '10rem' }} size="large">
            Shop now
          </Button>
        </Box>

        <Box flex={1} sx={{ display: { xs: 'none', sm: 'flex' } }}></Box>
      </Box>
    </>
  );
};
