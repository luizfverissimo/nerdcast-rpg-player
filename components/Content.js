import EpisodesNavigator from "./EpisodesNavigator";
import Player from "./Player";

function Content() {
  return (
    <section className='w-full flex justify-between'>
      <div className='w-1/2 flex flex-col justify-center items-start'>
        <header>
          <h1 className='font-oswald text-5xl text-theme-white'>
            NerdCast RPG <span className='text-theme-green'>Cthulhu</span>
          </h1>
          <p className='font-quattro text-2xl text-theme-white'>4 episódios</p>
        </header>

        <div className='mt-8'>
          <span className='font-oswald text-2xl text-theme-white'>#1</span>
          <h2 className='font-oswald text-4xl text-theme-green'>
            O mistério de William Faraday
          </h2>
          <span className='font-quattro text-2xl text-theme-white'>
            2 horas e 41 minutos
          </span>
          <p className='mt-8 font-quattro text-lg text-theme-white'>
            Estamos em 1936 e uma confraria de amigos, veteranos da Primeira
            Guerra Mundial, se reúne mais uma vez só que dessa vez a
            confraternização tomou rumos inesperados e muito sinistros.
            Atreva-se a ouvir esse programa para descobrir o que aconteceu com
            eles!
          </p>
          <p className='mt-8 font-oswald text-lg text-theme-green'>
            Escute no site{' '}
            <a
              className='font-oswald text-lg text-theme-green underline transition-all hover:text-theme-white'
              rel='external'
              href='#'
              target='_blank'
              rel='noopener'
            >
              Jovem Nerd
            </a>
            .
          </p>
          <EpisodesNavigator/>
          
        </div>
      </div>

      <div className='w-1/2 flex flex-col justify-center items-end'>
        <Player/>
      </div>
    </section>
  );
}

export default Content;
