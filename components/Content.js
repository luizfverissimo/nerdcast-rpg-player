import EpisodesNavigator from './EpisodesNavigator';
import Player from './Player';

function Content({ data }) {
  return (
    <section className='w-full flex justify-between'>
      <div className='w-1/2 flex flex-col justify-center items-start'>
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
        </div>
      </div>

      <div className='w-1/2 flex flex-col justify-center items-end'>
        <Player audioPath={data.audio} data={data}/>
      </div>
    </section>
  );
}

export default Content;
