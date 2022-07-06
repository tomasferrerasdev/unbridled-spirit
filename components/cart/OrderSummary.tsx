import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../../context/cart/CartContext';
import { currency } from '../../utils';

export const OrderSummary = () => {
  const { numberOfItems, subTotal, total, tax } = useContext(CartContext);

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Typography>No. of products</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>
          {numberOfItems}
          {numberOfItems > 1 ? ' products' : ' product'}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{currency.formatToCurrency(subTotal)}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>
          Taxes ({Number(process.env.NEXT_PUBLIC_TAX) * 100}%)
        </Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{currency.formatToCurrency(tax)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant="subtitle1" fontWeight={600}>
          {currency.formatToCurrency(total)}
        </Typography>
      </Grid>
    </Grid>
  );
};
