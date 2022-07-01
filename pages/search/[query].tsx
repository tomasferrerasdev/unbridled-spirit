import { Box, Typography } from '@mui/material';
import type { GetServerSideProps, NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products/ProductList';
import { productsDB } from '../../database';
import { Iproduct } from '../../interfaces/products';

interface Props {
  products: Iproduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayout
      title={'Unbridled spirit | Search'}
      pageDescription={
        'Order Bourbon Online and have it delivered directly to your door. Buy bourbon online today. Large selection of Single Batch Bourbon, Whiskies and more.'
      }
    >
      <Typography variant="h1" component="h1">
        Products
      </Typography>
      {foundProducts ? (
        <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
          term: {query}
        </Typography>
      ) : (
        <>
          <Box display="flex" flexWrap="wrap" gap={1} alignItems="center">
            <Typography variant="h2" sx={{ mb: 1 }}>
              There’s no product {query} |
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }} color="green">
              Products that may interest you
            </Typography>
          </Box>
        </>
      )}

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
  const foundProducts = products.length > 0;

  if (!foundProducts) {
    products = await productsDB.getProductsByTerm('single-barrel');
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};

export default SearchPage;
