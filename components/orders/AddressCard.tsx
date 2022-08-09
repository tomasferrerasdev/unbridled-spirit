import { Box, Divider, Typography } from '@mui/material';
import { FC } from 'react';
import { IOrder, ShippingAddress } from '../../interfaces';
import { countries } from '../../utils';
import { OrderSummary } from '../cart';

interface Props {
  shippingAddress: ShippingAddress;
  order: IOrder;
}

export const AddressCard: FC<Props> = ({ shippingAddress, order }) => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="subtitle1">Shipping Address</Typography>
      </Box>
      <Typography>
        {shippingAddress.firstName} {shippingAddress.lastName}
      </Typography>
      <Typography>
        {shippingAddress.address}{' '}
        {shippingAddress.address2 ? `, ${shippingAddress.address2}` : ``}
      </Typography>
      <Typography>
        {shippingAddress.city}, {shippingAddress.zip}
      </Typography>
      <Typography>
        {countries.find((c) => c.code === shippingAddress.country)?.name}
      </Typography>
      <Typography>{shippingAddress.phone}</Typography>
      <Divider sx={{ my: 1 }} />

      <Typography variant="subtitle1">Products</Typography>

      <OrderSummary
        orderValues={{
          numberOfItems: order.numberOfItems,
          subTotal: order.subTotal,
          total: order.total,
          tax: order.tax,
        }}
      />
    </>
  );
};
