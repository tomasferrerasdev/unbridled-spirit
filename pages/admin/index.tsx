import {
  AccessTimeOutlined,
  AttachMoneyOutlined,
  BorderColorOutlined,
  CancelPresentationOutlined,
  DashboardOutlined,
  GroupOutlined,
  LiquorOutlined,
  MoneyOffOutlined,
  ProductionQuantityLimitsOutlined,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { SummaryTile } from '../../components/admin';
import { AdminLayout } from '../../components/layouts/AdminLayout';
import { DashboardSummaryResponse } from '../../interfaces';

const DashboardPage = () => {
  const { data, error } = useSWR<DashboardSummaryResponse>(
    '/api/admin/dashboard',
    {
      refreshInterval: 30 * 1000, //30sec
    }
  );

  const [refreshIn, setRefreshIn] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshIn((refreshIn) => (refreshIn > 0 ? refreshIn - 1 : 30));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!error && !data) {
    return <></>;
  }

  if (error) {
    console.log(error);
    return <Typography>Error loading data</Typography>;
  }

  const {
    numberOfOrders,
    paidOrders,
    numberOfClients,
    numberOfProducts,
    noStockProducts,
    lowStockProducts,
    unpaidOrders,
  } = data!;

  return (
    <AdminLayout
      title="Dashboard"
      subTitle="General stats"
      icon={<DashboardOutlined />}
    >
      <>
        <Grid container spacing={2} mt={2}>
          <SummaryTile
            title={numberOfOrders}
            subtitle={'Total orders'}
            icon={
              <BorderColorOutlined
                color="secondary"
                sx={{ fontSize: '2.5rem' }}
              />
            }
          />
          <SummaryTile
            title={paidOrders}
            subtitle={'Payed orders'}
            icon={
              <AttachMoneyOutlined
                color="secondary"
                sx={{ fontSize: '2.5rem' }}
              />
            }
          />
          <SummaryTile
            title={unpaidOrders}
            subtitle={'Pending orders'}
            icon={
              <MoneyOffOutlined color="secondary" sx={{ fontSize: '2.5rem' }} />
            }
          />
          <SummaryTile
            title={numberOfClients}
            subtitle={'Clients'}
            icon={
              <GroupOutlined color="secondary" sx={{ fontSize: '2.5rem' }} />
            }
          />
          <SummaryTile
            title={numberOfProducts}
            subtitle={'Products'}
            icon={
              <LiquorOutlined color="secondary" sx={{ fontSize: '2.5rem' }} />
            }
          />
          <SummaryTile
            title={noStockProducts}
            subtitle={'No stock products'}
            icon={
              <CancelPresentationOutlined
                color="secondary"
                sx={{ fontSize: '2.5rem' }}
              />
            }
          />
          <SummaryTile
            title={lowStockProducts}
            subtitle={'Low stock'}
            icon={
              <ProductionQuantityLimitsOutlined
                color="secondary"
                sx={{ fontSize: '2.5rem' }}
              />
            }
          />
          <SummaryTile
            title={refreshIn}
            subtitle={'Update in:'}
            icon={
              <AccessTimeOutlined
                color="secondary"
                sx={{ fontSize: '2.5rem' }}
              />
            }
          />
        </Grid>
      </>
    </AdminLayout>
  );
};

export default DashboardPage;
