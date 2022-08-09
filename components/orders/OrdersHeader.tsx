import { CreditCardOffOutlined, CreditCardOutlined } from '@mui/icons-material';
import { Box, Chip, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  orderId?: string;
  isPaid: boolean;
}

export const OrdersHeader: FC<Props> = ({ orderId, isPaid }) => {
  return (
    <>
      <Box
        mb={4}
        display="flex"
        justifyContent="space-between"
        gap={2}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          mb={0.5}
          sx={{ fontSize: { xs: '1.5rem', md: '1.5rem' } }}
        >
          Order No. {orderId}
        </Typography>
        {isPaid ? (
          <Chip
            label="The order is already paid"
            color="success"
            variant="outlined"
            icon={<CreditCardOutlined />}
          />
        ) : (
          <Chip
            label="Pending payment"
            color="error"
            variant="outlined"
            icon={<CreditCardOffOutlined />}
          />
        )}
      </Box>
    </>
  );
};
