import { FC, ReactElement } from 'react';
import SidebarLayout from '@/layout/sidebarLayout';

interface props {
}

const Products = ({}: props) => {
  return <>Products</>;
};

Products.getLayout = (Page: ReactElement) => <SidebarLayout>{Page}</SidebarLayout>;

export default Products;
