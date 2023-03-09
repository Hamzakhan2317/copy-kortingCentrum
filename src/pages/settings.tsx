import { FC, ReactElement } from 'react';
import SidebarLayout from '@/layout/sidebarLayout';

interface props {}

const Settings = ({}: props) => {
  return <>Settings</>;
};

Settings.getLayout = (Page: ReactElement) => (
  <SidebarLayout>{Page}</SidebarLayout>
);

export default Settings;
