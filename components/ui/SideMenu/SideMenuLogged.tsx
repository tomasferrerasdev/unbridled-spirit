import {
  ConfirmationNumberOutlined,
  LoginOutlined,
  VpnKeyOutlined,
} from '@mui/icons-material';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext, UiContext } from '../../../context';

export const SideMenuLogged = () => {
  const router = useRouter();
  const { isLoggedIn, logoutUser, user } = useContext(AuthContext);
  const { toggleSideMenu } = useContext(UiContext);

  const navigateTo = (url: string) => {
    toggleSideMenu();
    router.push(url);
  };

  return (
    <>
      {isLoggedIn && (
        <>
          <ListItem button>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar alt="Avatar image" src="/logo.png" />
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary={user!.name} />
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
    </>
  );
};
