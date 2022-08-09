import { Box, Button, Link } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const items = [
  'kentucky',
  'tennessee',
  'straight',
  'single-barrel',
  'accessories',
];

export const NavList = () => {
  const { asPath } = useRouter();
  const [isSearchVisible, setisSearchVisible] = useState(false);
  return (
    <Box
      sx={{
        display: isSearchVisible ? 'none' : { xs: 'none', md: 'block' },
      }}
      className="fadeIn"
    >
      {items.map((item) => (
        <NextLink href={`/category/${item}`} passHref key={item}>
          <Link>
            <Button
              color={asPath === `/category/${item}` ? 'secondary' : 'info'}
            >
              {item}
            </Button>
          </Link>
        </NextLink>
      ))}
    </Box>
  );
};
