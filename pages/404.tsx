import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { ShopLayout } from '../components/layouts';

const Custom404Page = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | 404'}
      pageDescription={'there’s no whiskey in the jar'}
    >
      <>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="calc(100vh - 200px)"
          position="relative"
          gap={2}
        >
          <Image
            src="/images/turkey.png"
            width={600}
            height={500}
            objectFit="cover"
          />
          <Typography
            fontWeight={500}
            variant="h1"
            component="h1"
            sx={{ fontSize: { xs: 35, md: 60 } }}
          >
            404 | Not found
          </Typography>
        </Box>
      </>
    </ShopLayout>
  );
};

export default Custom404Page;
