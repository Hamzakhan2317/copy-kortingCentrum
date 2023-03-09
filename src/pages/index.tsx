import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { FC, ReactElement } from 'react';
import SidebarLayout from '@/layout/sidebarLayout';
import InputField from '@/components/Form/input';
import { Box } from '@mui/material';
import FormWrapper from '@/components/FormWrapper';
import Badges from '@/components/Badges';

const inter = Inter({ subsets: ['latin'] });

interface props {}

const Home = ({}: props) => {
  return (
    <Box margin={2} padding={2}>
      <FormWrapper heading="Testing">
        <>
          <InputField label="Dummy field" placeholder="Name" />
          <InputField label="Dummy field" placeholder="Name" />
          <InputField label="Dummy field" placeholder="Name" />
          <InputField label="Dummy field" placeholder="Name" />
        </>
      </FormWrapper>
      <FormWrapper heading="Testing">
        <>
          <InputField label="Dummy field" placeholder="Name" />
          <InputField label="Dummy field" placeholder="Name" />
          <InputField label="Dummy field" placeholder="Name" />
          <InputField label="Dummy field" placeholder="Name" />
        </>
      </FormWrapper>
      <FormWrapper heading="Testing">
        <>
          <InputField label="Dummy field" placeholder="Name" />
          <InputField label="Dummy field" placeholder="Name" />
          <InputField label="Dummy field" placeholder="Name" />
          <InputField label="Dummy field" placeholder="Name" />
          <Badges
            paddingBottom="1px"
            paddingLeft="15px"
            paddingRight="15px"
            paddingTop="1px"
            text="Badge"
          />
        </>
      </FormWrapper>
    </Box>
  );
};

Home.getLayout = (Page: any) => <SidebarLayout>{Page}</SidebarLayout>;

export default Home;
