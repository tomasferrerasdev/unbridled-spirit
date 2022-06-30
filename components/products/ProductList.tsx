import { Grid } from '@mui/material';
import { FC } from 'react';
import { Iproduct } from '../../interfaces/products';
import { ProductCard } from './ProductCard';

interface Props {
  products: Iproduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </Grid>
  );
};
