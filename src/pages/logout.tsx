import { FC, ReactElement } from 'react';
import SidebarLayout from '@/layout/sidebarLayout';

interface props {}

const Logout = ({}: props) => {
  return <>Logout</>;
};

Logout.getLayout = (Page: ReactElement) => (
  <SidebarLayout>{Page}</SidebarLayout>
);

export default Logout;
