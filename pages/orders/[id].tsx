import { CreditCardOutlined } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';

const OrderPage = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | order summary - 24567432'}
      pageDescription={'Order summary'}
    >
      {/* {
        <Chip
        sx={{ my: 2 }}
        label="Pending payment"
        color="error"
        variant="outlined"
        icon={<CreditCardOffOutlined />}
        />
      } */}

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h1" component="h1">
          Order No. ABC123
        </Typography>
        <Chip
          sx={{ my: 2 }}
          label="The order is already paid"
          color="success"
          variant="outlined"
          icon={<CreditCardOutlined />}
        />
      </Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Your order
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2" component="h2">
                Summary (3 products)
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Shipping Address</Typography>
                <NextLink href="/checkout/adress" passHref>
                  <Link underline="always">Edit</Link>
                </NextLink>
              </Box>
              <Typography>Tomas Ferreras</Typography>
              <Typography>721 Lewis Ave</Typography>
              <Typography>Gold Bar, 98251</Typography>
              <Typography>United States</Typography>
              <Typography>+1-202-555-0133</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Products</Typography>
                <NextLink href="/cart" passHref>
                  <Link underline="always">Edit</Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box
                sx={{ mt: 3 }}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <h1>Paid</h1>
                <Chip
                  sx={{ my: 2 }}
                  label="The order is already paid"
                  color="success"
                  variant="outlined"
                  icon={<CreditCardOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;