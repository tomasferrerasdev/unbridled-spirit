import { LiquorOutlined } from '@mui/icons-material';
import { AdminLayout } from '../../components/layouts';

const ProductsPage = () => {
  return (
    <AdminLayout
      title={'Products'}
      subTitle={'Products maintainance'}
      icon={<LiquorOutlined />}
    >
      <h1>pija</h1>
    </AdminLayout>
  );
};

export default ProductsPage;
