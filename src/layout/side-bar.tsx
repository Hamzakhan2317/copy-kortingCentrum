import {
  Box,
  Drawer,
  alpha,
  styled,
  Divider,
  useTheme,
  Button,
  lighten,
  darken,
} from '@mui/material';

import SidebarMenu from './sidebar-menu';
import Image from 'next/image';
import { useContext } from 'react';
import { SidebarContext } from '@/context/sidebar-context';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: 16.25%;
        min-width:16.25%;
        color: black;
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`,
);

function Sidebar() {
  const { sidebarToggle, closeSidebar }: any = useContext(SidebarContext);

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            // xs: 'none',
            lg: 'inline-block',
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background: '#333333',
        }}
      >
        <Box mt={3}>
          <Box mx={2} className="logo-wrapper">
            <Image
              className="logo-img"
              src="/assets/logo.webp"
              width="200"
              height="35"
              alt="logo"
            />
          </Box>
        </Box>
        <Divider sx={{ margin: '8px' }} />
        <SidebarMenu />
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
