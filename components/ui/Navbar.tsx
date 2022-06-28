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
import { FC } from 'react';

export const Navbar: FC = () => {
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
            <NextLink href="/category/kentucky" passHref>
              <Link>
                <Button variant="text" color="secondary">
                  Kentucky
                </Button>
              </Link>
            </NextLink>
            <NextLink href="/category/tennessee" passHref>
              <Link>
                <Button variant="text" color="secondary">
                  Tennessee
                </Button>
              </Link>
            </NextLink>
            <NextLink href="/category/straight" passHref>
              <Link>
                <Button variant="text" color="secondary">
                  Straight
                </Button>
              </Link>
            </NextLink>
            <NextLink href="/category/single-barrel" passHref>
              <Link>
                <Button variant="text" color="secondary">
                  Single-Barrel
                </Button>
              </Link>
            </NextLink>
            <NextLink href="/category/accessories" passHref>
              <Link>
                <Button variant="text" color="secondary">
                  Accessories
                </Button>
              </Link>
            </NextLink>
          </Box>

          <Box flex={1} />

          <IconButton>
            <SearchOutlined />
          </IconButton>

          <NextLink href="/cart" passHref>
            <Link>
              <IconButton>
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </Link>
          </NextLink>

          <Button
            disableRipple={true}
            sx={{ p: 0, justifyContent: 'right' }}
            className="nav-btn"
          >
            Menu
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
