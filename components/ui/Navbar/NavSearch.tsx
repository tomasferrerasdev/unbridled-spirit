import { ClearOutlined, SearchOutlined } from '@mui/icons-material';
import { Box, IconButton, Input, InputAdornment } from '@mui/material';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { UiContext } from '../../../context';

export const NavSearch = () => {
  const { push } = useRouter();
  const [isSearchVisible, setisSearchVisible] = useState(false);
  const { toggleSideMenu } = useContext(UiContext);
  const [searchTerm, setSearchTerm] = useState('');
  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/search/${searchTerm}`);
  };

  return (
    <>
      {/*DESKTOP*/}
      {isSearchVisible ? (
        <Input
          sx={{ display: { xs: 'none', md: 'flex', width: '10rem' } }}
          className="fadeIn"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
          type="text"
          placeholder="Search..."
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setisSearchVisible(false)}>
                <ClearOutlined />
              </IconButton>
            </InputAdornment>
          }
        />
      ) : (
        <IconButton
          sx={{ display: { xs: 'none', md: 'block' } }}
          onClick={() => setisSearchVisible(true)}
          className="fadeIn"
        >
          <Box display="flex" gap={1}>
            <SearchOutlined color="primary" />
          </Box>
        </IconButton>
      )}

      {/*MOBILE*/}
      <IconButton
        sx={{ display: { xs: 'block', md: 'none' } }}
        onClick={toggleSideMenu}
      >
        <Box display="flex" gap={1}>
          <SearchOutlined color="primary" />
        </Box>
      </IconButton>
    </>
  );
};
