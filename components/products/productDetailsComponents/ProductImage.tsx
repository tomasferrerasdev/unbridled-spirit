import { Chip } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  productImage: string;
  inStock: number;
}

export const ProductImage: FC<Props> = ({ productImage, inStock }) => {
  return (
    <>
      <Image
        src={productImage}
        priority={true}
        height={360}
        width={360}
        layout="responsive"
        className="fadeIn"
        alt={productImage}
      />
      {inStock === 0 && (
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
    </>
  );
};
