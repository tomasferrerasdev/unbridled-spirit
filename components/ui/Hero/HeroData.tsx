import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

export const HeroData = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
        height="100%"
        flex={1}
      >
        <Typography
          sx={{ fontSize: { xs: 50, sm: 70, md: 90 } }}
          fontWeight={700}
          lineHeight={1.2}
        >
          Unbridled
        </Typography>
        <Box display="flex" gap={2} alignItems="center" mb={5}>
          <Typography
            fontWeight={700}
            lineHeight={1.2}
            sx={{ fontSize: { xs: 50, sm: 70, md: 90 } }}
          >
            Spirit shop
          </Typography>
          <Box
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            height={70}
            width={130}
            position="relative"
          >
            <Image
              src="/images/us_flag.webp"
              layout="fill"
              alt="us flag image"
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
            Order Bourbon Online and have it delivered directly to your door.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
            Buy bourbon online today. Large selection of Single Batch Bourbon,
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
            Tennessee whiskies and more.
          </Typography>
          <Button sx={{ width: '10rem', my: 4 }} size="large">
            Shop now
          </Button>
        </Box>
      </Box>
    </>
  );
};
