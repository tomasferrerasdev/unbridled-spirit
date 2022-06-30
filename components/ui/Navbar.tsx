import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';
import { UiContext } from '../../context';

const items = [
  'kentucky',
  'tennessee',
  'straight',
  'single-barrel',
  'accessories',
];

export const Navbar: FC = () => {
  const { asPath } = useRouter();
  const { toggleSideMenu } = useContext(UiContext);

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters={true}>
          <NextLink href="/" passHref>
            <Link display="flex" alignItems="center">
              <Typography variant="h6">Unbridled spirit</Typography>
            </Link>
          </NextLink>

          <Box flex={1} />

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            {items.map((item) => (
              <NextLink href={`/category/${item}`} passHref key={item}>
                <Link>
                  <Button
                    color={
                      asPath === `/category/${item}` ? 'secondary' : 'info'
                    }
                  >
                    {item}
                  </Button>
                </Link>
              </NextLink>
            ))}
          </Box>

          <Box flex={1} />

          <Box display="flex" gap={1}>
            <IconButton>
              <SearchOutlined />
            </IconButton>

            <NextLink href="/cart" passHref>
              <Link>
                <IconButton>
                  <Badge badgeContent={2} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
              </Link>
            </NextLink>

            <Button onClick={toggleSideMenu} color="info">
              Menu
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
