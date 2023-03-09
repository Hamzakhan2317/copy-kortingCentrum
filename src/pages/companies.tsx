import { FC, ReactElement } from 'react';
import SidebarLayout from '@/layout/sidebarLayout';

interface props {
}

const Companies = ({}: props) => {
  return <>Companies</>;
};

Companies.getLayout = (Page: ReactElement) => <SidebarLayout>{Page}</SidebarLayout>;

export default Companies;
