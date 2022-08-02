import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import NextLink from 'next/link';
import { ShopLayout } from '../../components/layouts';
import { ordersDB } from '../../database';
import { IOrder } from '../../interfaces/order';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Full name', width: 300 },
  {
    field: 'paid',
    headerName: 'Paid',
    description: 'Shows order payment status',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" variant="outlined" label="Paid" />
      ) : (
        <Chip color="error" variant="outlined" label="Pending payment" />
      );
    },
  },
  {
    field: 'Order',
    headerName: 'Order',
    width: 200,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.orderID}`} passHref>
          <Link underline="always">See order</Link>
        </NextLink>
      );
    },
  },
];

interface Props {
  orders: IOrder[];
}

const HistoryPage: NextPage<Props> = ({ orders }) => {
  const rows = orders.map((order, index) => ({
    id: index + 1,
    paid: order.isPaid,
    fullname: `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`,
    orderID: order._id,
  }));

  return (
    <ShopLayout
      title={'Unbridled spirit | Order history'}
      pageDescription={'Clients order history'}
    >
      <Typography variant="h1" component="h1">
        Order history
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        History list
      </Typography>

      <Grid container className="fadeIn">
        <Grid item xs={12} sx={{ height: '33.125rem', width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session: any = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login?p=/orders/history',
        permanent: false,
      },
    };
  }

  const orders = await ordersDB.getOrderByUser(session.user._id);
  return {
    props: {
      orders,
    },
  };
};

export default HistoryPage;
