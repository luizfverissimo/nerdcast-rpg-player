import Link from 'next/link';

function AdventureCard({ data }) {
  return (
    <div
      className='bg-[#131215] rounded-2xl w-[21.25rem] h-[37.5rem] overflow-hidden flex flex-col items-center grayscale'
    >
      <Link href={data.link}>
        <a>
          <img
            className='w-full h-[413px] object-cover'
            src={data.img}
            alt='card image'
          />
        </a>
      </Link>
      <h2
        className={`w-full mt-4 text-center font-oswald text-4xl ${data.colorText}`}
      >
        {data.title}
      </h2>
      <p className='w-full mt-2 text-center font-quattro text-lgxl text-theme-white'>
        {data.episodes} episódios
      </p>
      <Link href={data.link}>
        <a
          className={`mt-5 ${data.colorBg} px-4 py-2 rounded-2xl font-oswald text-theme-black text-xl transition-all transform hover:-translate-y-1`}
        >
          Escute essa aventura!
        </a>
      </Link>
    </div>
  );
}

export default AdventureCard;
