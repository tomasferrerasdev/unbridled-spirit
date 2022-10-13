import { Box, Button, Link } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const items = [
  'all',
  'kentucky',
  'tennessee',
  'straight',
  'single-barrel',
  'unchained-devs',
];

export const NavList = () => {
  const { asPath } = useRouter();
  const [isSearchVisible] = useState(false);
  return (
    <Box
      sx={{
        display: isSearchVisible ? 'none' : { xs: 'none', md: 'flex' },
        flexDirection: 'row',
        alignItems: 'center',
      }}
      className="fadeIn"
    >
      {items.map((item) =>
        item === 'unchained-devs' ? (
          <NextLink href={`/category/${item}`} passHref key={item}>
            <Link>
              <Button
                color={asPath === `/category/${item}` ? 'secondary' : 'info'}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Image
                    src="/images/unchained-logo.svg"
                    alt="unchained devs logo"
                    height={22}
                    width={27.87}
                  />
                  Unchained Devs_
                </Box>
              </Button>
            </Link>
          </NextLink>
        ) : (
          <NextLink href={`/category/${item}`} passHref key={item}>
            <Link>
              <Button
                color={asPath === `/category/${item}` ? 'secondary' : 'info'}
              >
                {item}
              </Button>
            </Link>
          </NextLink>
        )
      )}
    </Box>
  );
};
