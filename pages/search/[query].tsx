import { Typography } from '@mui/material';
import type { GetServerSideProps, NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products/ProductList';
import { productsDB } from '../../database';
import { Iproduct } from '../../interfaces/products';

interface Props {
  products: Iproduct[];
}

const SearchPage: NextPage<Props> = ({ products }) => {
  return (
    <ShopLayout
      title={'Unbridled spirit | Search'}
      pageDescription={
        'Order Bourbon Online and have it delivered directly to your door. Buy bourbon online today. Large selection of Single Batch Bourbon, Whiskies and more.'
      }
    >
      <Typography variant="h1" component="h1">
        Product search
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        ABC123
      </Typography>

      <ProductList products={products} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = '' } = params as { query: string };
  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  let products = await productsDB.getProductsByTerm(query);

  return {
    props: {
      products,
    },
  };
};

export default SearchPage;
