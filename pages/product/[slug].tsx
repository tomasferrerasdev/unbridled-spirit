import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { ShopLayout } from '../../components/layouts';
import { ProductSizeSelector } from '../../components/products';
import { ProductSlideShow } from '../../components/products/ProductSlideShow';
import { ItemCounter } from '../../components/ui';
import { productsDB } from '../../database';
import { Iproduct, ISize } from '../../interfaces';
import { IcartProduct } from '../../interfaces/cart';

interface Props {
  product: Iproduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const [tempCartProduct, settempCartProduct] = useState<IcartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    type: product.type,
    ABV: product.ABV,
    quantity: product.quantity,
  });

  const onSelectedSize = (size: ISize) => {
    settempCartProduct((currentProduct) => ({
      ...currentProduct,
      size,
    }));
  };

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
              <Box display="flex" gap={1} sx={{ my: 1 }}>
                <Typography variant="subtitle2" component="h3">
                  ABV:
                </Typography>
                <Typography variant="body2">{product.ABV}</Typography>
              </Box>
              <Box display="flex" gap={1} sx={{ my: 1 }}>
                <Typography variant="subtitle2" component="h3">
                  Stock:
                </Typography>
                <Typography variant="body2">{product.inStock} units</Typography>
              </Box>
            </Box>

            <Box display="flex" flexDirection="column" gap={1} sx={{ my: 1 }}>
              <ItemCounter />
              <ProductSizeSelector
                sizes={product.sizes}
                selectedSize={tempCartProduct.size}
                onSelectedSize={onSelectedSize}
              />
            </Box>
            {product.inStock > 0 ? (
              <Button color="secondary" className="circular-btn" size="medium">
                {tempCartProduct.size
                  ? 'Add to cart'
                  : 'Please choose a bottle size'}
              </Button>
            ) : (
              <Chip label="no stock" color="error" variant="outlined" />
            )}
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
