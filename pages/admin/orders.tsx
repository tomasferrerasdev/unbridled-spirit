import { ConfirmationNumberOutlined } from '@mui/icons-material';
import { Chip, Grid } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import useSWR from 'swr';
import { AdminLayout } from '../../components/layouts';
import { IOrder, IUser } from '../../interfaces';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Order ID', width: 250 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'name', headerName: 'Full name', width: 200 },
  { field: 'total', headerName: 'Total', width: 150 },
  {
    field: 'isPaid',
    headerName: 'Paid',
    renderCell: ({ row }: GridValueGetterParams) => {
      return row.isPaid ? (
        <Chip variant="outlined" label="Paid" color="success" />
      ) : (
        <Chip variant="outlined" label="Pending" color="error" />
      );
    },
  },
  { field: 'noProducts', headerName: 'No.Products', align: 'center' },
  {
    field: 'check',
    headerName: 'Check order',
    renderCell: ({ row }: GridValueGetterParams) => {
      return (
        <a
          href={`/admin/orders/${row.id}`}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          Check order
        </a>
      );
    },
  },
  { field: 'createdAt', headerName: 'Created at', width: 250 },
];

const OrdersPage = () => {
  const { data, error } = useSWR<IOrder[]>('/api/admin/orders');

  if (!data && !error) return <></>;

  const rows = data!.map((order) => ({
    id: order._id,
    email: (order.user as IUser)?.email,
    name: (order.user as IUser)?.name,
    total: order.total,
    isPaid: order.isPaid,
    noProducts: order.numberOfItems,
    createdAt: order.createdAt,
  }));

  return (
    <AdminLayout
      title={'Orders'}
      subTitle={'Orders maintainance'}
      icon={<ConfirmationNumberOutlined />}
    >
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
    </AdminLayout>
  );
};

export default OrdersPage;
