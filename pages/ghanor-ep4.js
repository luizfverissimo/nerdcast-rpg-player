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
      <Background type={data.ghanor[3].type} />

      <Navbar />
      <main className='z-0 flex flex-col items-center justify-center flex-1 w-full max-w-7xl'>
        <Content data={data.ghanor[3]}/>
      </main>
    </div>
  );
}