import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link';
import { ShopLayout } from '../../components/layouts';

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
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline="always">See order</Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  { id: 1, paid: true, fullname: 'Tomas Ferreras' },
  { id: 2, paid: true, fullname: 'Puni' },
  { id: 3, paid: false, fullname: 'POSCO' },
  { id: 4, paid: true, fullname: 'Luis Ferreras' },
  { id: 5, paid: true, fullname: 'Pessolano Hugo' },
  { id: 6, paid: false, fullname: 'Gusti Correa' },
  { id: 7, paid: false, fullname: 'Dekoshi' },
  { id: 8, paid: true, fullname: 'Quirogium' },
  { id: 9, paid: true, fullname: 'Coscu' },
  { id: 10, paid: true, fullname: 'Pelo' },
  { id: 11, paid: false, fullname: 'Vladimir' },
  { id: 12, paid: true, fullname: 'Dante' },
  { id: 13, paid: false, fullname: 'Felipe' },
  { id: 14, paid: true, fullname: 'Patricia' },
  { id: 15, paid: true, fullname: 'Mache' },
];

const HistoryPage = () => {
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

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
