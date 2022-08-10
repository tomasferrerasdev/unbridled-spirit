import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import { FC, useContext } from 'react';
import { NavList, NavLogo, NavSearch } from '.';
import { CartContext, UiContext } from '../../../context';
import { NavBadge } from './NavBadge';

export const Navbar: FC = () => {
  const { toggleSideMenu } = useContext(UiContext);
  const { numberOfItems } = useContext(CartContext);

  return (
    <>
      <AppBar position="fixed">
        <Container>
          <Toolbar disableGutters={true}>
            <Box display="flex" gap={2}>
              <NavLogo />
              <NavList />
            </Box>

            <Box flex={1} />

            <Box display="flex" gap={1}>
              <NavSearch />
              <NavBadge numberOfItems={numberOfItems} />
              <Button onClick={toggleSideMenu} color="info">
                Menu
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
