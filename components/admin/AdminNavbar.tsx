import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import NextLink from 'next/link';
import { FC, useContext } from 'react';
import { UiContext } from '../../context';

export const AdminNavbar: FC = () => {
  const { toggleSideMenu } = useContext(UiContext);

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters={true}>
          <Box
            display="flex"
            gap={2}
            justifyContent="space-between"
            width="100%"
          >
            <NextLink href="/" passHref>
              <Link display="flex" alignItems="center">
                <Box
                  alignItems="center"
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  <Image
                    priority
                    src="/icons.svg"
                    width={20}
                    height={20}
                    alt="logo"
                  />
                </Box>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ fontSize: { sm: 20 }, padding: '0 5px' }}
                >
                  Unbridled spirit
                </Typography>
              </Link>
            </NextLink>

            <Button onClick={toggleSideMenu} color="info">
              Menu
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
