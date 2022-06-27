import { Box, Button, Grid, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import {
  ProductSizeSelector,
  ProductSlideShow,
} from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { initialData } from '../../database/products';

const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <ProductSlideShow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              ${product.price}
            </Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Quantity</Typography>
              <ItemCounter />
              <ProductSizeSelector
                selectedSize={product.sizes[1]}
                sizes={product.sizes}
              />
            </Box>
            <Button color="secondary" className="circular-btn" size="medium">
              Add to cart
            </Button>
            {/*<Chip label="no stock" color="error" variant="outlined" />*/}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" fontWeight={700}>
                Description
              </Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductPage;
