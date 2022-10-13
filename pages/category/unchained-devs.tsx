import { Box, Link, Typography } from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import { ShopLayout } from '../../components/layouts';
import { PageTitles } from '../../components/ui';

const UnchainedDevs: NextPage = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | Shop'}
      pageDescription={
        'find the best kentucky bourbons online, free shipping anywhere in the United States'
      }
    >
      <PageTitles title={'Unchained devs_'} subTitle={'Merchandise'} />
      <Box
        height="calc(100vh - 200px)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/images/unchained.svg"
          width={500}
          height={160}
          alt="unchained devs logo"
          priority
        />
        <Typography mt={5} mb={5} variant="h1">
          coming soon
        </Typography>
        <Link
          target="_blank"
          href="https://tomasferrerasdev.github.io/unchained-devs/"
        >
          <Typography
            sx={{
              fontSize: '1rem',
              cursor: 'pointer',
              borderBottom: '2px solid black',
            }}
          >
            Visit Unchained Devs_
          </Typography>
        </Link>
      </Box>
    </ShopLayout>
  );
};

export default UnchainedDevs;
