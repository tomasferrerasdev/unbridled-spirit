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
import { FC, useState } from 'react';
import { Iproduct } from '../../interfaces';

interface Props {
  product: Iproduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isImageLoader, setIsImageLoader] = useState(false);

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
                    maxHeight: '21.875rem',
                  }}
                />
              )}

              <CardMedia
                sx={{
                  height: { xs: '12.5rem', sm: '15.625rem', md: '18.75rem' },
                }}
                component="img"
                image={`/product/${product.images[0]}`}
                alt={`${product.title} image`}
                className="fadeIn"
                onLoad={() => setIsImageLoader(true)}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box
        sx={{ mt: 1, display: isImageLoader ? 'block' : 'none' }}
        className="fadeIn"
      >
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={400}>${product.price}</Typography>
      </Box>
    </Grid>
  );
};
