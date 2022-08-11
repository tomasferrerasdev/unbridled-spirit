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
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          height="calc(100vh - 200px)"
          position="relative"
          mt={15}
          gap={2}
        >
          <Image
            src="/images/Turkey_404.png"
            width={510}
            height={580}
            objectFit="cover"
            priority
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
