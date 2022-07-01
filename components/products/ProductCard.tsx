import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
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
    <Grid item xs={6} sm={4}>
      <Card>
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                image={`/product/${product.images[0]}`}
                alt={`${product.title} image`}
                className="fadeIn"
                onLoad={() => setIsImageLoader(true)}
                sx={{
                  height: { xs: '200px', sm: '400', md: '400px' },
                }}
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
/*
<CardMedia
  component="img"
  image={`/product/${product.images[0]}`}
  alt={`${product.title} image`}
  className="fadeIn"
  onLoad={() => setIsImageLoader(true)}
  height={400}
/>;*/
