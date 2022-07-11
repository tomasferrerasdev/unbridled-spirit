import {
  Box,
  Card,
  CardActionArea,
  Chip,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import Image from 'next/image';
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

              <Image
                priority
                src={`/product/${product.images}`}
                height={360}
                width={360}
                layout="responsive"
                className="fadeIn"
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
