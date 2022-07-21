import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const bodyFooterProduct = [
  'Our strategy: Powering Progress',
  'Business customers',
  'Energy and innovation',
  'Sustainability',
  'Investors',
  'Careers',
];

const bodyFooterAbout = [
  'Who we are',
  'What we do',
  'Our Values',
  'Leadership',
  'Our major projects',
  'The Unbridled brand',
  'Annual publications',
];

const bodyFooterHelp = ['Job search', 'Unbridled Global Helpline'];

const bottomFooterItems = [
  'Accessibility',
  'Terms and conditions',
  'Privacy notices',
  'Cookie policy',
  'Fraud and scam alert',
  'Contact us',
];

export const Footer = () => {
  return (
    <Box sx={{ mt: { xs: 10, sm: 15, md: 20 } }}>
      <Grid container spacing={2} display="flex" justifyContent="center" mb={5}>
        <Grid item xs={12} sm={4} md={3} position="relative">
          <Typography component="h1" variant="h1" fontSize={24} mb={2}>
            Our Products
          </Typography>
          <List>
            {bodyFooterProduct.map((item) => (
              <ListItem disableGutters key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} sm={4} md={3} display="flex" justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>

        <Grid item xs={12} sm={4} md={3} position="relative">
          <Typography component="h1" variant="h1" fontSize={24} mb={2}>
            More about
          </Typography>
          <List>
            {bodyFooterAbout.map((item) => (
              <ListItem disableGutters key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography component="h1" variant="h1" fontSize={24} mb={2}>
            Can we help?
          </Typography>
          <List>
            {bodyFooterHelp.map((item) => (
              <ListItem disableGutters key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      <Box>
        <Divider />
      </Box>

      <Grid container spacing={2} mb={10} mt={10}>
        {bottomFooterItems.map((item) => (
          <Grid item xs={6} sm={4} md={2} key={item}>
            <Typography variant="body1" component="p">
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
