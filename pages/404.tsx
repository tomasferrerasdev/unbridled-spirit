import { Box, Button, Link, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { ShopLayout } from '../components/layouts';

const Custom404Page = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | 404'}
      pageDescription={'there’s no whiskey in the jar'}
    >
      <>
        <Box
          width="100%"
          height="calc(100vh - 50px)"
          display="flex"
          flexDirection="column"
        >
          <Box height="100%" flex={1} position="relative">
            <Image
              src="/images/Turkey_404.webp"
              layout="fill"
              objectFit="contain"
              priority
              alt="turkey illustration"
            />
          </Box>
          <Box
            height="100%"
            flex={0.4}
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            gap={1}
          >
            <Typography sx={{ fontSize: { xs: 40, sm: 50 } }}>
              404 | not found
            </Typography>

            <NextLink href="/" passHref>
              <Link>
                <Button sx={{ width: '10rem' }} size="medium">
                  Shop now
                </Button>
              </Link>
            </NextLink>
          </Box>
        </Box>
      </>
    </ShopLayout>
  );
};

export default Custom404Page;
