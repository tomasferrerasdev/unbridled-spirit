import { Box } from '@mui/material';
import Head from 'next/head';
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

      <main>
        <Drink />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 12.5rem)"
        >
          {children}
        </Box>
      </main>
    </>
  );
};
