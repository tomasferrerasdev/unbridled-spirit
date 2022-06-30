import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { FullScreenLoading } from '../../components/ui';

const AccessoriesPage: NextPage = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | Shop'}
      pageDescription={
        'find the best tennessee bourbons online, free shipping anywhere in the United States'
      }
    >
      <Typography variant="h1" component="h1">
        Bourbon
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Accessories - ⚠️ Under contruction ⚠️
      </Typography>

      <FullScreenLoading />
    </ShopLayout>
  );
};

export default AccessoriesPage;
