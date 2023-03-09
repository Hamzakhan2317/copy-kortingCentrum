import { FC, ReactNode } from 'react';
import { Box, alpha, lighten, useTheme, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import Sidebar from './side-bar';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: '100%',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid
            sx={{
              background: '#d6dbdc',
            }}
            item
            xs={10}
          >
            <Box display="block">{children}</Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node,
};

export default SidebarLayout;
