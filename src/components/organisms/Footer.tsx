import { Box } from '@mui/material';
import { FC } from 'react';

const year = new Date().getFullYear();

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={1}
      py={2}
    >
      <small>{`${year} 3-5 class.`}</small>
    </Box>
  );
};

export default Footer;
