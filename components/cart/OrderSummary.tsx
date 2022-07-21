import { Grid, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { CartContext } from '../../context/cart/CartContext';
import { currency } from '../../utils';

interface Props {
  orderValues?: {
    numberOfItems: number;
    subTotal: number;
    total: number;
    tax: number;
  };
}

export const OrderSummary: FC<Props> = ({ orderValues }) => {
  const { numberOfItems, subTotal, total, tax } = useContext(CartContext);

  const summaryValues = orderValues
    ? orderValues
    : { numberOfItems, subTotal, total, tax };

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Typography>No. of products</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>
          {summaryValues.numberOfItems}
          {summaryValues.numberOfItems > 1 ? ' products' : ' product'}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>
          {currency.formatToCurrency(summaryValues.subTotal)}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>
          Taxes ({Number(process.env.NEXT_PUBLIC_TAX) * 100}%)
        </Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{currency.formatToCurrency(summaryValues.tax)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant="subtitle1" fontWeight={600}>
          {currency.formatToCurrency(summaryValues.total)}
        </Typography>
      </Grid>
    </Grid>
  );
};
