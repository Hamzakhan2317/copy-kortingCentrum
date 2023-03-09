import Head from 'next/head';
import { FC } from 'react';

interface props {
  desc: string;
  title: string;
  icon?: string;
}

const Meta = ({ desc, title, icon }: props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={"/favicon.ico"} />
    </Head>
  );
};

export default Meta;
