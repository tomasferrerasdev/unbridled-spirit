import { Box } from '@mui/material';
import { FC } from 'react';

interface Props {
  images: string[];
}

export const ProductSlideShow: FC<Props> = ({ images }) => {
  return (
    <Box key={images[0]}>
      <Box
        sx={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          height: { xs: '14rem', md: '40.625rem' },
        }}
      ></Box>
    </Box>
  );
};
