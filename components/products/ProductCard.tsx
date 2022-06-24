import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';
import { FC } from 'react';
import { Iproduct } from '../../interfaces';

interface Props {
  product: Iproduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  return (
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
  );
};
