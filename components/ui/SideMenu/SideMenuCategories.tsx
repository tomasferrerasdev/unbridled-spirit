import { ArrowForwardOutlined } from '@mui/icons-material';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UiContext } from '../../../context';

const ValidTypes = [
  'All',
  'Kentucky',
  'Tennessee',
  'Straight',
  'Single-Barrel',
  'Unchained-Devs',
];

export const SideMenuCategories = () => {
  const router = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  const navigateTo = (url: string) => {
    toggleSideMenu();
    router.push(url);
  };

  return (
    <>
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
          onClick={() => navigateTo(`/category/${categoryName.toLowerCase()}`)}
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
    </>
  );
};
