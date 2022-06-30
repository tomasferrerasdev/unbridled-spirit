import { Box, Button, Grid, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { ProductSizeSelector } from '../../components/products';
import { ProductSlideShow } from '../../components/products/ProductSlideShow';
import { ItemCounter } from '../../components/ui';
import { productsDB } from '../../database';
import { Iproduct } from '../../interfaces';

interface Props {
  product: Iproduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={6}>
          <ProductSlideShow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              ${product.price}
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" component="h2" fontWeight={700}>
                Description
              </Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2" component="h3">
                Quantity
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <ItemCounter />
                <ProductSizeSelector
                  sizes={product.sizes}
                  selectedSize={'1L'}
                />
              </Box>
            </Box>
            <Button color="secondary" className="circular-btn" size="medium">
              Add to cart
            </Button>
            {/*<Chip label="no stock" color="error" variant="outlined" />*/}
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productSlugs = await productsDB.getAllProductSlugs();

  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params as { slug: string };
  const product = await productsDB.getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 86400,
  };
};

export default ProductPage;
