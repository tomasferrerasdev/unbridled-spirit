import {
  ConfirmationNumberOutlined,
  CreditCardOffOutlined,
  CreditCardOutlined,
} from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import { CartList, OrderSummary } from '../../../components/cart';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import { ordersDB } from '../../../database';
import { IOrder } from '../../../interfaces';
import { countries } from '../../../utils/countries';

interface Props {
  order: IOrder;
}

const OrderPage: NextPage<Props> = ({ order }) => {
  const { shippingAddress } = order;

  return (
    <AdminLayout
      title={'Unbridled spirit | order summary'}
      subTitle={`Order No.: ${order._id}`}
      icon={<ConfirmationNumberOutlined />}
    >
      <Grid container spacing={3} className="fadeIn" mt={2}>
        <Grid item xs={12} md={7}>
          <CartList products={order.orderItems} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2" component="h2">
                Summary ({order.numberOfItems}{' '}
                {order.numberOfItems === 1 ? 'Product' : 'Products'})
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Shipping Address</Typography>
              </Box>
              <Typography>
                {shippingAddress.firstName} {shippingAddress.lastName}
              </Typography>
              <Typography>
                {shippingAddress.address}{' '}
                {shippingAddress.address2
                  ? `, ${shippingAddress.address2}`
                  : ``}
              </Typography>
              <Typography>
                {shippingAddress.city}, {shippingAddress.zip}
              </Typography>
              <Typography>
                {
                  countries.find((c) => c.code === shippingAddress.country)
                    ?.name
                }
              </Typography>
              <Typography>{shippingAddress.phone}</Typography>
              <Divider sx={{ my: 1 }} />

              <Typography variant="subtitle1">Products</Typography>

              <OrderSummary
                orderValues={{
                  numberOfItems: order.numberOfItems,
                  subTotal: order.subTotal,
                  total: order.total,
                  tax: order.tax,
                }}
              />

              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Box flexDirection="column" display="flex">
                  {order.isPaid ? (
                    <Chip
                      sx={{ my: 2, flex: 1, pt: 1, pb: 1 }}
                      label="The order is already paid"
                      color="success"
                      variant="outlined"
                      icon={<CreditCardOutlined />}
                    />
                  ) : (
                    <Chip
                      sx={{ my: 2, flex: 1, pt: 1, pb: 1 }}
                      label="Pending payment"
                      color="error"
                      variant="outlined"
                      icon={<CreditCardOffOutlined />}
                    />
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { id = '' } = query;
  const order = await ordersDB.getOrderById(id.toString());

  if (!order) {
    return {
      redirect: {
        destination: `/admin/orders`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      order,
    },
  };
};

export default OrderPage;
