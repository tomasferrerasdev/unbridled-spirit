import { List, ListItem, ListItemText, Typography } from '@mui/material';
const aboutItems = [
  'Who we are',
  'What we do',
  'Our Values',
  'Leadership',
  'Our major projects',
  'The Unbridled brand',
  'Annual publications',
];

export const MoreAbout = () => {
  return (
    <>
      <Typography component="h1" variant="h1" fontSize={24} mb={2}>
        More about
      </Typography>
      <List>
        {aboutItems.map((item) => (
          <ListItem disableGutters key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
