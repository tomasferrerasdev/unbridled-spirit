import { Box } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  images: string[];
  stock: number;
  title: string;
}

export const ProductSlideShow: FC<Props> = ({ images, title }) => {
  return (
    <Box key={images[0]}>
      <Image
        src={`/product/${images}`}
        priority={true}
        height={360}
        width={360}
        layout="responsive"
        className="fadeIn"
        alt={title}
      />
    </Box>
  );
};
