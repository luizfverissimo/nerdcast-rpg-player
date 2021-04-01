import Head from 'next/head';
import AdventureCard from '../components/AdventureCard';

import BackgroundHome from '../components/BackgroundHome';
import Navbar from '../components/Navbar';
import cardData from '../cardData.json';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-start min-h-screen'>
      <Head>
        <title>NerdCast RPG | Selecione a sua aventura!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BackgroundHome />

      <Navbar />
      <main className='w-full flex-1 max-w-7xl flex flex-col items-center justify-center z-0'>
        <section className='w-full flex justify-between'>
          <AdventureCard data={cardData.cyberpunk} />
          <AdventureCard data={cardData.cthulhu} />
          <AdventureCard data={cardData.ghanor} />
        </section>
      </main>
    </div>
  );
}
