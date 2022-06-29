import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products/ProductList';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

const StraightPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?type=straight');

  return (
    <ShopLayout
      title={'Unbridled spirit | Shop'}
      pageDescription={
        'find the best straight bourbons online, free shipping anywhere in the United States'
      }
    >
      <Typography variant="h1" component="h1">
        Straight
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Bourbon
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default StraightPage;
