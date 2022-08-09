import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Iproduct } from '../../../interfaces';

interface Props {
  product: Iproduct;
}

export const ProductData: FC<Props> = ({ product }) => {
  return (
    <>
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
          <Typography variant="body2">{product.ABV}%</Typography>
        </Box>
        <Box display="flex" gap={1} sx={{ my: 1 }}>
          <Typography variant="subtitle2" component="h3">
            Stock:
          </Typography>
          <Typography variant="body2">{product.inStock} units</Typography>
        </Box>
      </Box>
    </>
  );
};
