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
          <Box sx={{ height: { xs: '400px', sm: '500px', md: '600px' } }}>
            <div className={styles['each-slide']} key={image}>
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
