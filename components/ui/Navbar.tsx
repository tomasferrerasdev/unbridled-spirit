import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC, useContext, useState } from 'react';
import { UiContext } from '../../context';

const items = [
  'kentucky',
  'tennessee',
  'straight',
  'single-barrel',
  'accessories',
];

export const Navbar: FC = () => {
  const { asPath, push } = useRouter();
  const { toggleSideMenu } = useContext(UiContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setisSearchVisible] = useState(false);
  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/search/${searchTerm}`);
  };

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters={true}>
          <NextLink href="/" passHref>
            <Link display="flex" alignItems="center">
              <Typography
                variant="body1"
                color="primary"
                sx={{ fontSize: { sm: 20 } }}
              >
                Unbridled spirit
              </Typography>
            </Link>
          </NextLink>

          <Box flex={1} />

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
            {/*DESKTOP*/}
            {isSearchVisible ? (
              <Input
                sx={{ display: { xs: 'none', md: 'flex' } }}
                className="fadeIn"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
                type="text"
                placeholder="Search..."
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setisSearchVisible(false)}>
                      <ClearOutlined />
                    </IconButton>
                  </InputAdornment>
                }
              />
            ) : (
              <IconButton
                sx={{ display: { xs: 'none', md: 'block' } }}
                onClick={() => setisSearchVisible(true)}
                className="fadeIn"
              >
                <Box display="flex" gap={1}>
                  <Typography variant="body1" color="primary">
                    search
                  </Typography>
                  <SearchOutlined color="primary" />
                </Box>
              </IconButton>
            )}

            {/*MOBILE*/}
            <IconButton
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={toggleSideMenu}
            >
              <Box display="flex" gap={1}>
                <SearchOutlined color="primary" />
              </Box>
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
