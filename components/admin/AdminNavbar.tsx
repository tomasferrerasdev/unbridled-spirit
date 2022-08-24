import { AppBar, Box, Button, Link, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import NextLink from 'next/link';
import { FC, useContext } from 'react';
import { UiContext } from '../../context';
import { NavLogo } from '../ui/Navbar';

export const AdminNavbar: FC = () => {
  const { toggleSideMenu } = useContext(UiContext);

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters={true}>
          <Box
            display="flex"
            gap={2}
            justifyContent="space-between"
            width="100%"
          >
            <NextLink href="/" passHref>
              <Link display="flex" alignItems="center">
                <NavLogo />
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
