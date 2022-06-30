import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products/ProductList';
import { FullScreenLoading } from '../../components/ui/FullScreenLoading';
import { useProducts } from '../../hooks';

const SearchPage: NextPage = () => {
  const { products, isLoading } = useProducts('/search/kentucky');

  return (
    <ShopLayout
      title={'Unbridled spirit | Search'}
      pageDescription={
        'Order Bourbon Online and have it delivered directly to your door. Buy bourbon online today. Large selection of Single Batch Bourbon, Whiskies and more.'
      }
    >
      <Typography variant="h1" component="h1">
        Search product
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        ABC123
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default SearchPage;
