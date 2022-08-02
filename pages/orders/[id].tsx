import { CreditCardOffOutlined, CreditCardOutlined } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { unbridledSpiritAPI } from '../../api';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';
import { ordersDB } from '../../database';
import { IOrder } from '../../interfaces';
import { countries } from '../../utils/countries';

export type OrderResponseBody = {
  id: string;
  status:
    | 'COMPLETED'
    | 'SAVED'
    | 'APPROVED'
    | 'VOIDED'
    | 'PAYER_ACTION_REQUIRED'
    | any;
};

interface Props {
  order: IOrder;
}

const OrderPage: NextPage<Props> = ({ order }) => {
  const router = useRouter();
  const { shippingAddress } = order;
  const [isPaying, setIsPaying] = useState(false);

  const onOrderCompleted = async (details: OrderResponseBody) => {
    if (details.status !== 'COMPLETED') {
      return alert('No hay pago en Paypal');
    }

    setIsPaying(true);

    try {
      const { data } = await unbridledSpiritAPI.post(`/orders/pay`, {
        transactionId: details.id,
        orderId: order._id,
      });

      router.reload();
    } catch (error) {
      setIsPaying(false);
      console.log(error);
      alert('Error');
    }
  };

  return (
    <ShopLayout
      title={'Unbridled spirit | order summary'}
      pageDescription={'Order summary'}
    >
      <Box
        mb={4}
        display="flex"
        justifyContent="space-between"
        gap={2}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          mb={0.5}
          sx={{ fontSize: { xs: '1.5rem', md: '1.5rem' } }}
        >
          Order No. {order._id}
        </Typography>
        {order.isPaid ? (
          <Chip
            label="The order is already paid"
            color="success"
            variant="outlined"
            icon={<CreditCardOutlined />}
          />
        ) : (
          <Chip
            label="Pending payment"
            color="error"
            variant="outlined"
            icon={<CreditCardOffOutlined />}
          />
        )}
      </Box>

      <Grid container spacing={3} className="fadeIn">
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
                <Box
                  display="flex"
                  justifyContent="center"
                  className="fadeIn"
                  sx={{ display: isPaying ? 'flex' : 'none' }}
                >
                  <CircularProgress color="success" thickness={2} />
                </Box>

                <Box
                  sx={{ display: isPaying ? 'none' : 'flex', flex: 1 }}
                  flexDirection="column"
                >
                  {order.isPaid ? (
                    <Chip
                      sx={{ my: 2 }}
                      label="The order is already paid"
                      color="success"
                      variant="outlined"
                      icon={<CreditCardOutlined />}
                    />
                  ) : (
                    <PayPalButtons
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: `${order.total}`,
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions.order!.capture().then((details) => {
                          onOrderCompleted(details);
                        });
                      }}
                    />
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { id = '' } = query;
  const session: any = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: `/auth/login?p=/orders/${id}`,
        permanent: false,
      },
    };
  }

  const order = await ordersDB.getOrderById(id.toString());
  if (!order) {
    return {
      redirect: {
        destination: `/orders/history`,
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
