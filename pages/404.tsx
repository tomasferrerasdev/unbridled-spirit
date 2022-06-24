import { Box, Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';

const Custom404Page = () => {
  return (
    <ShopLayout
      title={'Page not found'}
      pageDescription={'there’s no whiskey in the jar'}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={150}>
          404 |{' '}
        </Typography>
        <Typography marginLeft={2} fontSize={40}>
          there’s no whiskey in the jar 🦃🧪
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404Page;
