import { ShoppingCartOutlined } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { ShopLayout } from '../../components/layouts';

const EmptyPage = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | Empty cart'}
      pageDescription="There’s no products in the cart"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <ShoppingCartOutlined sx={{ fontSize: 100 }} />
          <Typography variant="h1" component="h1">
            Your cart is empty
          </Typography>
          <NextLink href="/" passHref>
            <Link typography="h4" color="secondary">
              Back home
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
