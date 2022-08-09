import { List, ListItem, ListItemText, Typography } from '@mui/material';
const products = [
  'Our strategy: Powering Progress',
  'Business customers',
  'Energy and innovation',
  'Sustainability',
  'Investors',
  'Careers',
];

export const OurProducts = () => {
  return (
    <>
      <Typography component="h1" variant="h1" fontSize={24} mb={2}>
        Our Products
      </Typography>
      <List>
        {products.map((product) => (
          <ListItem disableGutters key={product}>
            <ListItemText primary={product} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
