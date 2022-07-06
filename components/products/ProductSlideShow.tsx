import { Box, Chip } from '@mui/material';
import { FC } from 'react';

interface Props {
  images: string[];
  stock: number;
}

export const ProductSlideShow: FC<Props> = ({ images, stock }) => {
  return (
    <Box key={images[0]}>
      <Box
        position="relative"
        sx={{
          backgroundImage: `url(${images})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          height: { xs: '14rem', md: '40.625rem' },
        }}
      >
        {stock === 0 && (
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
      </Box>
    </Box>
  );
};
