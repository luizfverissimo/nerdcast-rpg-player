import { motion } from 'framer-motion';

import EpisodesNavigator from './EpisodesNavigator';
import Player from './Player';

function Content({ data }) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8 }
      }}
      className='w-full flex flex-col justify-between p-6 xl:p-0 md:flex-row'
    >
      <div className='w-full flex flex-col justify-center items-start md:w-1/2'>
        <header>
          <h1 className='font-oswald text-5xl text-theme-white'>
            NerdCast RPG{' '}
            <span
              className={`${
                data.type === 'cthulhu'
                  ? 'text-theme-green'
                  : data.type === 'cyberpunk'
                  ? 'text-theme-pink'
                  : 'text-theme-orange'
              }`}
            >
              {data.type === 'cthulhu'
                ? 'Cthulhu'
                : data.type === 'cyberpunk'
                ? 'Cyberpunk'
                : 'Crônicas de Ghanor'}
            </span>
          </h1>
          <p className='font-quattro text-2xl text-theme-white'>
            {data.type === 'cthulhu' ? '4' : '3'} episódios
          </p>
        </header>

        <div className='mt-8'>
          <span className='font-oswald text-2xl text-theme-white'>
            #{data.number}
          </span>
          <h2
            className={`font-oswald text-4xl ${
              data.type === 'cthulhu'
                ? 'text-theme-green'
                : data.type === 'cyberpunk'
                ? 'text-theme-pink'
                : 'text-theme-orange'
            }`}
          >
            {data.title}
          </h2>
          <span className='font-quattro text-2xl text-theme-white'>
            {data.duration}
          </span>
          <p className='mt-8 font-quattro text-lg text-theme-white'>
            {data.desc}
          </p>
          <p
            className={`mt-8 font-oswald text-lg ${
              data.type === 'cthulhu'
                ? 'text-theme-green'
                : data.type === 'cyberpunk'
                ? 'text-theme-pink'
                : 'text-theme-orange'
            } `}
          >
            Escute no site{' '}
            <a
              className={`font-oswald text-lg ${
                data.type === 'cthulhu'
                  ? 'text-theme-green'
                  : data.type === 'cyberpunk'
                  ? 'text-theme-pink'
                  : 'text-theme-orange'
              } underline transition-all hover:text-theme-white`}
              rel='external'
              href={data.linkJN}
              target='_blank'
              rel='noopener'
            >
              Jovem Nerd
            </a>
            .
          </p>
          <EpisodesNavigator epNumber={data.number} type={data.type} />
          <p className="font-oswald text-[#7A7A7A] mt-10">
            Esse podcast foi criado pela equipe{' '}
            <a
            className="underline"
              rel='external'
              href='https://www.jovemnerd.com'
              target='_blank'
              rel='noopener'
            >
              Jovem Nerd
            </a>
            , todos os direitos são reservados à eles.
          </p>
        </div>
      </div>

      <div className='w-full mt-8 flex flex-col justify-center items-center md:w-1/2 md:items-end md:mt-0'>
        <Player audioPath={data.audio} data={data} />
      </div>
    </motion.section>
  );
}

export default Content;
