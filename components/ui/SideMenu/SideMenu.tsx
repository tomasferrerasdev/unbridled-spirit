import { Box, Divider, Drawer, List } from '@mui/material';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import {
  SideMenuAdmin,
  SideMenuCategories,
  SideMenuLogged,
  SideMenuSearch,
} from '.';
import { UiContext } from '../../../context';

export const SideMenu = () => {
  const router = useRouter();
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    navigateTo(`/search/${searchTerm}`);
  };

  const navigateTo = (url: string) => {
    toggleSideMenu();
    router.push(url);
  };

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
