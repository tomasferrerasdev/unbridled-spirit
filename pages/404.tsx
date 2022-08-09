import { Box, Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';

const Custom404Page = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | 404'}
      pageDescription={'there’s no whiskey in the jar'}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <Typography
          fontWeight={500}
          variant="h1"
          component="h1"
          sx={{ fontSize: { xs: 40, md: 80 } }}
        >
          404 | Not found
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404Page;
