import { List, ListItem, ListItemText, Typography } from '@mui/material';
const helpItems = ['Job search', 'Unbridled Global Helpline'];

export const Help = () => {
  return (
    <>
      <Typography component="h1" variant="h1" fontSize={24} mb={2}>
        Can we help?
      </Typography>
      <List>
        {helpItems.map((item) => (
          <ListItem disableGutters key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
