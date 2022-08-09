import { Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  title: string;
  subTitle?: string;
}

export const PageTitles: FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <Typography variant="h1" component="h1">
        {title}
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {subTitle}
      </Typography>
    </>
  );
};
