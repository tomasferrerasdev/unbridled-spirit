import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { ShopLayout } from '../../components/layouts';

const AddressPage = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | Address'}
      pageDescription={'Confirm shipping address'}
    >
      <Typography variant="h1" component="h1">
        Address
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Complete with your data
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Name" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Surname" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Address" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Second address (optional)"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="ZIP/Postal code" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant="filled" label="Country" value={1}>
              <MenuItem value={1}>Select Country</MenuItem>
              <MenuItem value={2}>United States</MenuItem>
              <MenuItem value={3}>Mexico</MenuItem>
              <MenuItem value={4}>Argentina</MenuItem>
              <MenuItem value={5}>Norway</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Phone number" variant="filled" fullWidth />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }} display="flex" justifyContent="left">
        <Button color="secondary" className="circular-btn" size="large">
          Check order
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default AddressPage;
