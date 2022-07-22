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
import { Box, Grid } from '@mui/material';
import { SummaryTile } from '../../components/admin';
import { AdminLayout } from '../../components/layouts/AdminLayout';

const DashboardPage = () => {
  return (
    <AdminLayout
      title="Dashboard"
      subTitle="General stats"
      icon={<DashboardOutlined />}
    >
      <Box>
        <Grid container spacing={2} mt={2}>
          <SummaryTile
            title={'1'}
            subtitle={'Total orders'}
            icon={
              <BorderColorOutlined
                color="secondary"
                sx={{ fontSize: '2.5rem' }}
              />
            }
          />
          <SummaryTile
            title={'2'}
            subtitle={'Payed orders'}
            icon={
              <AttachMoneyOutlined
                color="secondary"
                sx={{ fontSize: '2.5rem' }}
              />
            }
          />
          <SummaryTile
            title={'3'}
            subtitle={'Pending orders'}
            icon={
              <MoneyOffOutlined color="secondary" sx={{ fontSize: '2.5rem' }} />
            }
          />
          <SummaryTile
            title={'4'}
            subtitle={'Clients'}
            icon={
              <GroupOutlined color="secondary" sx={{ fontSize: '2.5rem' }} />
            }
          />
          <SummaryTile
            title={'5'}
            subtitle={'Products'}
            icon={
              <LiquorOutlined color="secondary" sx={{ fontSize: '2.5rem' }} />
            }
          />
          <SummaryTile
            title={'6'}
            subtitle={'Nonexistent products'}
            icon={
              <CancelPresentationOutlined
                color="secondary"
                sx={{ fontSize: '2.5rem' }}
              />
            }
          />
          <SummaryTile
            title={'7'}
            subtitle={'Low stock'}
            icon={
              <ProductionQuantityLimitsOutlined
                color="secondary"
                sx={{ fontSize: '2.5rem' }}
              />
            }
          />
          <SummaryTile
            title={'8'}
            subtitle={'Update in:'}
            icon={
              <AccessTimeOutlined
                color="secondary"
                sx={{ fontSize: '2.5rem' }}
              />
            }
          />
        </Grid>
      </Box>
    </AdminLayout>
  );
};

export default DashboardPage;
