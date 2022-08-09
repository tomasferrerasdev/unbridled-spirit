import { Box, Link, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

export const NavLogo = () => {
  return (
    <NextLink href="/" passHref>
      <Link display="flex" alignItems="center">
        <Box alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Image priority src="/icons.svg" width={20} height={20} alt="logo" />
        </Box>
        <Typography
          variant="body1"
          color="primary"
          sx={{ fontSize: { sm: 20 }, padding: '0 5px' }}
        >
          Unbridled spirit
        </Typography>
      </Link>
    </NextLink>
  );
};
