import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';

const SummaryPage = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | Summary'}
      pageDescription={'Order summary'}
    >
      <Typography variant="h1" component="h1">
        Order summary
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Your order
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
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

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirm order
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
