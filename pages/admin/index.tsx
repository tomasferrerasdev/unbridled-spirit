import { DashboardOutlined } from '@mui/icons-material';
import { AdminLayout } from '../../components/layouts/AdminLayout';

const DashboardPage = () => {
  return (
    <AdminLayout
      title="Dashboard"
      subTitle="General stats"
      icon={<DashboardOutlined />}
    >
      <h3>Hello Admin</h3>
    </AdminLayout>
  );
};

export default DashboardPage;
