import Head from 'next/head';

import Background from '../components/Background';
import Content from '../components/Content';
import Navbar from '../components/Navbar';
import data from '../data.json'


export default function Home() {
  return (
    <div className='flex flex-col items-center justify-start min-h-screen'>
      <Head>
        <title>NerdCast RPG Crônicas de Ghanor</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Background type={data.ghanor[0].type} />

      <Navbar />
      <main className='w-full flex-1 max-w-7xl flex flex-col items-center justify-center z-0'>
        <Content data={data.ghanor[0]}/>
      </main>
    </div>
  );
}