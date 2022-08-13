import { Box, Button, Chip, Grid } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSnackbar, VariantType } from 'notistack';
import { useContext, useState } from 'react';
import { ShopLayout } from '../../components/layouts';
import {
  ProductData,
  ProductImage,
  ProductSizeSelector,
} from '../../components/products';
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
  const { enqueueSnackbar } = useSnackbar();

  const [tempCartProduct, settempCartProduct] = useState<IcartProduct>({
    _id: product._id as string,
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
    handleClickVariant('success');
  };

  const handleClickVariant = (variant: VariantType) => {
    enqueueSnackbar('Added to cart successfully', {
      variant,
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    });
  };

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={4} justifyContent="left">
        <Grid item xs={12} md={6}>
          <ProductImage
            productImage={product.images[0]}
            inStock={product.inStock}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" gap={2}>
            <ProductData product={product} />

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
