import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products/ProductList';
import { initialData } from '../database/products';

const HomePage: NextPage = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | Shop'}
      pageDescription={
        'Order Bourbon Online and have it delivered directly to your door. Buy bourbon online today. Large selection of Single Batch Bourbon, Whiskies and more.'
      }
    >
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1">
          Shop
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          All products
        </Typography>
        <ProductList products={initialData.products as any} />
      </Container>
    </ShopLayout>
  );
};

export default HomePage;
