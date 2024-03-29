import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';
import { PageTitles } from '../../components/ui';
import { CartContext } from '../../context';

const CartPage = () => {
  const { isLoaded, cart } = useContext(CartContext);
  const router = useRouter();
  useEffect(() => {
    if (isLoaded && cart.length === 0) {
      router.replace('/cart/empty');
    }
  }, [isLoaded, cart, router]);

  if (!isLoaded || cart.length === 0) {
    return <></>;
  }

  return (
    <ShopLayout
      title={'Unbridled spirit | Cart'}
      pageDescription={'Shopping cart'}
    >
      <PageTitles title={'Cart'} subTitle={'All products'} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={8}>
          <CartList editable />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2" component="h2">
                Order
              </Typography>
              <Divider sx={{ my: 1 }} />
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button
                  color="secondary"
                  className="circular-btn"
                  fullWidth
                  href="/checkout/address"
                >
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
