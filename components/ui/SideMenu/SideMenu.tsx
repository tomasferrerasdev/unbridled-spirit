import { Box, Divider, Drawer, List } from '@mui/material';
import { useContext } from 'react';
import {
  SideMenuAdmin,
  SideMenuCategories,
  SideMenuLogged,
  SideMenuSearch,
} from '.';
import { UiContext } from '../../../context';

export const SideMenu = () => {
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      sx={{ backdropFilter: 'blur(2px)', transition: 'all 0.5s ease-out' }}
      onClose={toggleSideMenu}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <SideMenuSearch />
          <SideMenuLogged />
          <SideMenuCategories />
          <Divider />
          <SideMenuAdmin />
        </List>
      </Box>
    </Drawer>
  );
};
