import { Box, Link, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

export const NavLogo = () => {
  return (
    <NextLink href="/" passHref>
      <Link display="flex" alignItems="center">
        <Box
          alignItems="center"
          sx={{ display: { xs: 'flex', sm: 'flex' } }}
          gap={1}
        >
          <Image
            src="/images/logo.png"
            width={30}
            height={20}
            alt="us flag logo"
            priority
          />
          <Typography fontWeight={700} fontSize={20}>
            Unbridled Spirit
          </Typography>
        </Box>
      </Link>
    </NextLink>
  );
};
