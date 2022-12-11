import { CreditCardOutlined } from '@mui/icons-material';
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
import { CartList } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';
import { AddressCard, OrdersHeader } from '../../components/orders';
import { ordersDB } from '../../database';
import { IOrder } from '../../interfaces';

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
      <OrdersHeader orderId={order._id} isPaid={order.isPaid} />

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

              <AddressCard shippingAddress={shippingAddress} order={order} />

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
                    <>
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
                      <Typography display="flex" gap={1}>
                        <Box fontWeight={800} color="#2da84e">
                          Paypal demo user:
                        </Box>{' '}
                        demouser@google.com
                      </Typography>
                      <Typography display="flex" gap={1}>
                        <Box fontWeight={800} color="#2da84e">
                          Password:
                        </Box>{' '}
                        demouser
                      </Typography>
                    </>
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
