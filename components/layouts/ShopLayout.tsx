import { Container } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';
import { Footer, Navbar, SideMenu } from '../ui';

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: React.ReactNode;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <nav>
        <Navbar />
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
          {children}
          <footer>
            <Footer />
          </footer>
        </Container>
      </main>
    </>
  );
};
