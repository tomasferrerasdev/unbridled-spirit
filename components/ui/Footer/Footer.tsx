import { Box, Divider, Grid } from '@mui/material';
import { BottomLinks, Help, MoreAbout, OurProducts } from '.';

export const Footer = () => {
  return (
    <>
      <Box sx={{ mt: { xs: 10, sm: 15, md: 20 } }}>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          mb={5}
        >
          <Grid item xs={12} sm={4} md={3} position="relative">
            <OurProducts />
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <Divider orientation="vertical" />
          </Grid>

          <Grid item xs={12} sm={4} md={3} position="relative">
            <MoreAbout />
          </Grid>

          <Grid item xs={12} md={3}>
            <Help />
          </Grid>
        </Grid>

        <Divider />
        <Grid container spacing={2} mb={10} mt={10}>
          <BottomLinks />
        </Grid>
      </Box>
    </>
  );
};
