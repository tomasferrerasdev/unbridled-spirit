import {
  AccountCircleOutlined,
  AdminPanelSettings,
  ArrowForwardOutlined,
  ConfirmationNumberOutlined,
  DashboardOutlined,
  LiquorOutlined,
  LoginOutlined,
  SearchOutlined,
  VpnKeyOutlined,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AuthContext, UiContext } from '../../context';

const ValidTypes = ['Kentucky', 'Tennessee', 'Straight', 'Single-Barrel'];

export const SideMenu = () => {
  const router = useRouter();
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
  const { user, isLoggedIn, logoutUser } = useContext(AuthContext);

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
          <ListItem>
            <Input
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
              type="text"
              placeholder="Search..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={onSearchTerm}>
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>

          {isLoggedIn && (
            <>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleOutlined />
                </ListItemIcon>
                <ListItemText primary={'Profile'} />
              </ListItem>

              <ListItem button onClick={() => navigateTo('/orders/history')}>
                <ListItemIcon>
                  <ConfirmationNumberOutlined />
                </ListItemIcon>
                <ListItemText primary={'My orders'} />
              </ListItem>
            </>
          )}

          {isLoggedIn ? (
            <ListItem button onClick={logoutUser}>
              <ListItemIcon>
                <LoginOutlined />
              </ListItemIcon>
              <ListItemText primary={'LogOut'} />
            </ListItem>
          ) : (
            <ListItem
              button
              onClick={() => navigateTo(`/auth/login?p=${router.asPath}`)}
            >
              <ListItemIcon>
                <VpnKeyOutlined />
              </ListItemIcon>
              <ListItemText primary={'LogIn'} />
            </ListItem>
          )}

          <ListSubheader
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
            }}
          >
            Products
          </ListSubheader>
          {ValidTypes.map((categoryName) => (
            <ListItem
              onClick={() =>
                navigateTo(`/category/${categoryName.toLowerCase()}`)
              }
              button
              sx={{ display: { xs: '', md: 'none' } }}
              key={categoryName}
            >
              <ListItemIcon>
                <ArrowForwardOutlined />
              </ListItemIcon>
              <ListItemText primary={categoryName} />
            </ListItem>
          ))}

          <Divider />
          {user?.role === 'admin' && (
            <>
              <ListSubheader>Admin Panel</ListSubheader>
              <ListItem button onClick={() => navigateTo('/admin/')}>
                <ListItemIcon>
                  <DashboardOutlined />
                </ListItemIcon>
                <ListItemText primary={'Dashboard'} />
              </ListItem>

              <ListItem button onClick={() => navigateTo('/admin/products')}>
                <ListItemIcon>
                  <LiquorOutlined />
                </ListItemIcon>
                <ListItemText primary={'Products'} />
              </ListItem>

              <ListItem button onClick={() => navigateTo('/admin/orders')}>
                <ListItemIcon>
                  <ConfirmationNumberOutlined />
                </ListItemIcon>
                <ListItemText primary={'Orders'} />
              </ListItem>

              <ListItem button onClick={() => navigateTo('/admin/users')}>
                <ListItemIcon>
                  <AdminPanelSettings />
                </ListItemIcon>
                <ListItemText primary={'Users'} />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
};
