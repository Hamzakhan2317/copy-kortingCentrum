import { FC, ReactElement } from 'react';
import SidebarLayout from '@/layout/sidebarLayout';

interface props {
}

const Pages = ({}: props) => {
  return <>Pages</>;
};

Pages.getLayout = (Page: ReactElement) => <SidebarLayout>{Page}</SidebarLayout>;

export default Pages;
