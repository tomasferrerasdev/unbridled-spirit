import {
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
} from '@mui/icons-material';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

export const AdminSideMenu = () => {
  return (
    <>
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
    </>
  );
};
