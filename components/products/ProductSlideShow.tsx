import { Box } from '@mui/material';
import { FC } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './ProductSlideShow.module.css';

interface Props {
  images: string[];
}

export const ProductSlideShow: FC<Props> = ({ images }) => {
  return (
    <Slide easing="ease" duration={9000} indicators>
      {images.map((image) => {
        return (
          <Box
            key={image}
            sx={{ height: { xs: '25rem', sm: '31.25rem', md: '37.5rem' } }}
          >
            <div className={styles['each-slide']}>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
          </Box>
        );
      })}
    </Slide>
  );
};
