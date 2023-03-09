import { FC, ReactElement } from 'react';
import SidebarLayout from '@/layout/sidebarLayout';

interface props {
}

const Users = ({}: props) => {
  return <>Users</>;
};

Users.getLayout = (Page: ReactElement) => <SidebarLayout>{Page}</SidebarLayout>;

export default Users;
