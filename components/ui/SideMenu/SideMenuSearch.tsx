import { SearchOutlined } from '@mui/icons-material';
import { IconButton, Input, InputAdornment, ListItem } from '@mui/material';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { UiContext } from '../../../context';

export const SideMenuSearch = () => {
  const router = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
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
    <>
      <ListItem>
        <Input
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
    </>
  );
};
