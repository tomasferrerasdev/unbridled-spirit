import {
  AdminPanelSettings,
  ConfirmationNumberOutlined,
  DashboardOutlined,
  LiquorOutlined,
} from '@mui/icons-material';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext, UiContext } from '../../../context';

export const SideMenuAdmin = () => {
  const router = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  const { user } = useContext(AuthContext);
  const navigateTo = (url: string) => {
    toggleSideMenu();
    router.push(url);
  };

  return (
    <>
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
    </>
  );
};
