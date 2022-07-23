import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { AdminNavbar } from '../admin';
import { Footer, SideMenu } from '../ui';

interface Props {
  title: string;
  subTitle: string;
  icon?: JSX.Element;
  children: React.ReactNode;
}

export const AdminLayout: FC<Props> = ({ children, title, subTitle, icon }) => {
  return (
    <>
      <nav>
        <AdminNavbar />
      </nav>

      <SideMenu />

      <main
        style={{
          margin: '0px auto',
        }}
      >
        <Container
          sx={{
            marginTop: { xs: ' 3.75rem', sm: '5rem' },
          }}
        >
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h1"
              component="h1"
              display="flex"
              gap={1}
              alignItems="center"
            >
              {icon}
              {title}
            </Typography>
            <Typography variant="h2" component="h2" mb={1}>
              {subTitle}
            </Typography>
          </Box>

          <Box className="fadeIn">{children}</Box>
          <footer>
            <Footer />
          </footer>
        </Container>
      </main>
    </>
  );
};
