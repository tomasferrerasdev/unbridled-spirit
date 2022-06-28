import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { FC } from 'react';
import { initialData } from '../../database/products';
import { ItemCounter } from '../ui';

interface Props {
  editable?: boolean;
}

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
export const CartList: FC<Props> = ({ editable = false }) => {
  return (
    <>
      {productsInCart.map((product) => (
        <Grid
          key={product.slug}
          justifyContent={{ xs: 'space-between', sm: 'flex-start' }}
          container
          spacing={2}
          sx={{
            mb: 1,
            justifyContent: { sm: 'space-between' },
          }}
        >
          <Grid item xs={2}>
            <NextLink href="/products/slug" passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/product/${product.images[0]}`}
                    component="img"
                    sx={{
                      borderRadius: '8px',
                      aspectRatio: '1/1',
                    }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Size: <strong>750ml</strong>
                {editable && <ItemCounter />}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">{`$${product.price}`}</Typography>
            {editable && (
              <Button variant="text" color="secondary">
                Remove
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
