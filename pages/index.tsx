import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/products';

const HomePage: NextPage = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | Shop'}
      pageDescription={
        'Order Bourbon Online and have it delivered directly to your door. Buy bourbon online today. Large selection of Single Batch Bourbon, Whiskies and more.'
      }
    >
      <Typography variant="h1" component="h1">
        Shop
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        All products
      </Typography>

      <Grid container spacing={4}>
        {initialData.products.map((product) => (
          <Grid item xs={6} sm={4} lg={3} key={product.slug}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`products/${product.image}`}
                  alt={`${product.title} image`}
                  sx={{ maxHeight: '400px', maxWidth: '500px' }}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ShopLayout>
  );
};

export default HomePage;
