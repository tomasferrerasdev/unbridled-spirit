import { Grid, Typography } from '@mui/material';

const bottomItems = [
  'Accessibility',
  'Terms and conditions',
  'Privacy notices',
  'Cookie policy',
  'Fraud and scam alert',
  'Contact us',
];

export const BottomLinks = () => {
  return (
    <>
      {bottomItems.map((item) => (
        <Grid item xs={6} sm={4} md={2} key={item}>
          <Typography variant="body1" component="p">
            {item}
          </Typography>
        </Grid>
      ))}
    </>
  );
};
