import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { FC } from 'react';
import { Iproduct } from '../../interfaces';

interface Props {
  product: Iproduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card>
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
          <Link>
            <CardActionArea>
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

              <CardMedia
                component="img"
                className="fadeIn"
                image={product.images[0]}
                alt={product.title}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={400}>${product.price}</Typography>
      </Box>
    </Grid>
  );
};
