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
import { FC, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context';
import { IcartProduct, IOrderItem } from '../../interfaces';
import { ItemCounter } from '../ui';

interface Props {
  editable?: boolean;
  products?: IOrderItem[];
}

export const CartList: FC<Props> = ({ editable = false, products }) => {
  const { cart, updateProductQuantity, removeCartProduct } =
    useContext(CartContext);

  const onNewProductQuantity = (product: IcartProduct, newQuantity: number) => {
    product.quantity = newQuantity;
    updateProductQuantity(product);
  };
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const productsToShow = products ? products : cart;

  return (
    <>
      {hasMounted &&
        productsToShow.map((product) => {
          return (
            <Grid
              key={product.slug + product.size}
              justifyContent="space-between"
              container
              spacing={{ xs: 1, sm: 1 }}
              sx={{
                mb: 1,
              }}
            >
              <Grid item xs={2}>
                <NextLink
                  href={`/product/${product.slug}`}
                  prefetch={false}
                  passHref
                >
                  <Link>
                    <CardActionArea>
                      <CardMedia
                        src={product.image}
                        component="img"
                        className="fadeIn"
                        alt={product.title}
                      />
                    </CardActionArea>
                  </Link>
                </NextLink>
              </Grid>
              <Grid item xs={7}>
                <Box display="flex" flexDirection="column">
                  <Typography variant="body1" fontWeight={600}>
                    {product.title}
                  </Typography>
                  <Typography variant="body1">Size: {product.size}</Typography>

                  {editable ? (
                    <ItemCounter
                      currentValue={product.quantity}
                      maxValue={10}
                      updatedQuantity={(value) => {
                        onNewProductQuantity(product as IcartProduct, value);
                      }}
                    />
                  ) : (
                    <Typography variant="h5" fontSize="1rem">
                      {product.quantity}
                      {product.quantity > 1 ? ' products' : ' product'}
                    </Typography>
                  )}
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
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={() => removeCartProduct(product as IcartProduct)}
                  >
                    Remove
                  </Button>
                )}
              </Grid>
            </Grid>
          );
        })}
    </>
  );
};
