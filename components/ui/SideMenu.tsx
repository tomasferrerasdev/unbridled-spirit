import {
  AccountCircleOutlined,
  AdminPanelSettings,
  ArrowForwardOutlined,
  CategoryOutlined,
  ConfirmationNumberOutlined,
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
import { UiContext } from '../../context';

const ValidTypes = ['Kentucky', 'Tennessee', 'Straight', 'Single-Barrel'];

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

          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText primary={'Profile'} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={'My orders'} />
          </ListItem>

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

          <ListItem button>
            <ListItemIcon>
              <VpnKeyOutlined />
            </ListItemIcon>
            <ListItemText primary={'LogIn'} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary={'LogOut'} />
          </ListItem>

          <Divider />

          <ListSubheader>Admin Panel</ListSubheader>
          <ListItem button>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={'Products'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={'Orders'} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AdminPanelSettings />
            </ListItemIcon>
            <ListItemText primary={'Users'} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
