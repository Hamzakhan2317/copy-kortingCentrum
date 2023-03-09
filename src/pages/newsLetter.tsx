import { FC, ReactElement } from 'react';
import SidebarLayout from '@/layout/sidebarLayout';

interface props {
}

const NewsLetter = ({}: props) => {
  return <>NewsLetter</>;
};

NewsLetter.getLayout = (Page: ReactElement) => <SidebarLayout>{Page}</SidebarLayout>;

export default NewsLetter;
