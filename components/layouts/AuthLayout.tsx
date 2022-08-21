import { Box } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import { Drink } from '../ui';
interface Props {
  title: string;
  children: React.ReactNode;
}

export const AuthLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main style={{ position: 'relative' }}>
        <Box position="absolute" bottom={-50} right={0} sx={{ zIndex: -1 }}>
          <Image
            src="/images/LoginBarn.webp"
            width={1050}
            height={800}
            alt="barn image"
            priority
          />
        </Box>
        <Drink />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 50px)"
        >
          {children}
        </Box>
      </main>
    </>
  );
};
