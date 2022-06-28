import { Grid, Typography } from '@mui/material';

export const OrderSummary = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Typography>No. of products</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>3</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{`$${155.36}`}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Taxes (15%)</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{`$${23.25}`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography
          variant="subtitle1"
          fontWeight={600}
        >{`$${178.61}`}</Typography>
      </Grid>
    </Grid>
  );
};
