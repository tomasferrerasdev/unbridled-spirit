import { Box } from '@mui/material';
import Image from 'next/image';
import { HeroData } from '.';

export const HeroSection = () => {
  return (
    <>
      <Box
        width="100%"
        height="calc(100vh - 100px)"
        maxHeight="1000px"
        display="flex"
        mb={10}
      >
        <HeroData />
        <Box
          height="100%"
          flex={0.4}
          position="relative"
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          <Image
            src="/images/Turkey_hero.png"
            layout="fill"
            objectFit="contain"
            priority
            alt="turkey illustration image"
          />
        </Box>
      </Box>
    </>
  );
};
