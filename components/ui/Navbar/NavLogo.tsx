import { Box, Link, Typography } from '@mui/material';
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
          <Typography fontWeight={700} fontSize={20}>
            Unbridled Spirit
          </Typography>
        </Box>
      </Link>
    </NextLink>
  );
};
