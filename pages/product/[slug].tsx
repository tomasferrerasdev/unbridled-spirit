import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { ShopLayout } from '../../components/layouts';
import { ProductSizeSelector } from '../../components/products';
import { ProductSlideShow } from '../../components/products/ProductSlideShow';
import { ItemCounter } from '../../components/ui';
import { CartContext } from '../../context/cart/CartContext';
import { productsDB } from '../../database';
import { Iproduct, ISize } from '../../interfaces';
import { IcartProduct } from '../../interfaces/cart';

interface Props {
  product: Iproduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  const { addProductToCart } = useContext(CartContext);

  const [tempCartProduct, settempCartProduct] = useState<IcartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    type: product.type,
    ABV: product.ABV,
    quantity: 1,
  });

  const onSelectedSize = (size: ISize) => {
    settempCartProduct((currentProduct) => ({
      ...currentProduct,
      size,
    }));
  };
  const onUpdateQuantity = (quantity: number) => {
    settempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity,
    }));
  };

  const onAddProduct = () => {
    if (!tempCartProduct.size) {
      return;
    }

    addProductToCart(tempCartProduct);
    router.push('/cart');
  };

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={4} justifyContent="left">
        <Grid item xs={12} md={6}>
          <ProductSlideShow
            stock={product.inStock}
            images={product.images}
            title={product.title}
          />
          {product.inStock === 0 && (
            <Chip
              color="primary"
              label="Out of stock"
              sx={{
                position: 'absolute',
                zIndex: '99',
                top: '10px',
                right: '10px',
              }}
            />
          )}
        </Grid>

        <Grid item xs={12} md={6}>
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
              <ItemCounter
                maxValue={product.inStock}
                updatedQuantity={onUpdateQuantity}
                currentValue={tempCartProduct.quantity}
              />
              <ProductSizeSelector
                sizes={product.sizes}
                selectedSize={tempCartProduct.size}
                onSelectedSize={onSelectedSize}
              />
            </Box>
            {product.inStock > 0 ? (
              <Button
                color="secondary"
                className="circular-btn"
                size="medium"
                onClick={onAddProduct}
              >
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
