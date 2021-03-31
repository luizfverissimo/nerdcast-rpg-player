function PlayerButtons({
  onClickReturn10,
  onCLickNext10,
  onClickPlay,
  isPlaying
}) {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <svg
          className='fill-current text-theme-green transition-all cursor-pointer hover:text-theme-white'
          onClick={onClickReturn10}
          width='41'
          height='39'
          viewBox='0 0 41 39'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M4.8 8.19565V3.12505C4.8 2.58799 4.58665 2.07292 4.20689 1.69316C3.82713 1.3134 3.31206 1.10005 2.775 1.10005C2.23794 1.10005 1.72287 1.3134 1.34311 1.69316C0.963347 2.07292 0.75 2.58799 0.75 3.12505V12.575C0.75 13.6928 1.6572 14.6 2.775 14.6H13.575C14.1121 14.6 14.6271 14.3867 15.0069 14.0069C15.3867 13.6272 15.6 13.1121 15.6 12.575C15.6 12.038 15.3867 11.5229 15.0069 11.1432C14.6271 10.7634 14.1121 10.55 13.575 10.55H8.1102C11.334 6.79705 15.9483 4.47505 21 4.47505C27.48 4.47505 33.231 8.29555 36.2685 14.0411C36.6573 14.7782 37.4025 15.275 38.2368 15.275C39.6867 15.275 40.6938 13.8359 40.0404 12.5399C36.4197 5.36335 29.3052 0.425049 21 0.425049C14.5038 0.425049 8.7366 3.44635 4.8 8.19565ZM16.275 22.025C16.2752 21.6377 16.1644 21.2584 15.9556 20.9321C15.7468 20.6059 15.4488 20.3464 15.0969 20.1844C14.745 20.0224 14.3541 19.9647 13.9705 20.0181C13.5868 20.0716 13.2265 20.234 12.9324 20.4861L8.2074 24.5361C8.0053 24.7091 7.83925 24.9202 7.71875 25.1574C7.59824 25.3946 7.52564 25.6532 7.50508 25.9185C7.48452 26.1838 7.51641 26.4505 7.59893 26.7034C7.68144 26.9563 7.81297 27.1905 7.986 27.3926C8.33545 27.8008 8.83273 28.0535 9.36845 28.095C9.63371 28.1155 9.90042 28.0836 10.1534 28.0011C10.4063 27.9186 10.6405 27.7871 10.8426 27.614L12.225 26.426V36.875C12.225 37.4121 12.4383 37.9272 12.8181 38.3069C13.1979 38.6867 13.7129 38.9 14.25 38.9C14.7871 38.9 15.3021 38.6867 15.6819 38.3069C16.0617 37.9272 16.275 37.4121 16.275 36.875V22.025ZM34.5 29.45C34.5 34.6691 32.8125 38.9 27.75 38.9C22.6875 38.9 21 34.6691 21 29.45C21 24.2309 22.6875 20 27.75 20C32.8125 20 34.5 24.2309 34.5 29.45ZM30.45 29.45C30.45 27.155 30.0585 25.6728 29.5752 24.8925C29.4369 24.6439 29.2346 24.437 28.9893 24.293C28.803 24.1904 28.4385 24.05 27.75 24.05C27.0615 24.05 26.697 24.1904 26.508 24.293C26.2633 24.4381 26.062 24.646 25.9248 24.8951C25.4415 25.6727 25.05 27.155 25.05 29.45C25.05 31.745 25.4415 33.2273 25.9248 34.0076C26.0631 34.2562 26.2654 34.4631 26.5107 34.607C26.697 34.7096 27.0615 34.85 27.75 34.85C28.4385 34.85 28.803 34.7096 28.992 34.607C29.2367 34.462 29.438 34.2541 29.5752 34.005C30.0585 33.2274 30.45 31.745 30.45 29.45Z' />
        </svg>
        <div
          className='bg-theme-green w-20 h-20 flex justify-center items-center rounded-full mx-6 transition-all cursor-pointer hover:bg-theme-white'
          onClick={onClickPlay}
        >
          {isPlaying ? (
            <svg
              className='fill-current text-theme-black'
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.311 0.444458H2.68879C1.41854 0.444458 0.388794 1.4742 0.388794 2.74446V29.2556C0.388794 30.5258 1.41854 31.5556 2.68879 31.5556H10.311C11.5813 31.5556 12.611 30.5258 12.611 29.2556V2.74446C12.611 1.4742 11.5813 0.444458 10.311 0.444458Z' />
              <path d='M29.1999 0.444458H21.5777C20.3075 0.444458 19.2777 1.4742 19.2777 2.74446V29.2556C19.2777 30.5258 20.3075 31.5556 21.5777 31.5556H29.1999C30.4702 31.5556 31.4999 30.5258 31.4999 29.2556V2.74446C31.4999 1.4742 30.4702 0.444458 29.1999 0.444458Z' />
            </svg>
          ) : (
            <svg
              className='fill-current text-theme-black'
              width='31'
              height='35'
              viewBox='0 0 31 35'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0)'>
                <path d='M29.367 14.6776L5.00982 0.452032C3.0308 -0.703241 0 0.417853 0 3.27527V31.7196C0 34.2831 2.81629 35.828 5.00982 34.5429L29.367 20.3241C31.5397 19.0595 31.5467 15.9423 29.367 14.6776V14.6776Z' />
              </g>
              <defs>
                <clipPath id='clip0'>
                  <rect width='31' height='35' fill='white' />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>

        <svg
          className='fill-current text-theme-green transition-all cursor-pointer hover:text-theme-white'
          onClick={onCLickNext10}
          width='40'
          height='39'
          viewBox='0 0 40 39'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M35.445 7.7706V2.7C35.445 2.16294 35.6583 1.64787 36.0381 1.26811C36.4179 0.888347 36.9329 0.675 37.47 0.675C38.0071 0.675 38.5221 0.888347 38.9019 1.26811C39.2817 1.64787 39.495 2.16294 39.495 2.7V12.15C39.495 12.6871 39.2817 13.2021 38.9019 13.5819C38.5221 13.9617 38.0071 14.175 37.47 14.175H26.67C26.1329 14.175 25.6179 13.9617 25.2381 13.5819C24.8583 13.2021 24.645 12.6871 24.645 12.15C24.645 11.6129 24.8583 11.0979 25.2381 10.7181C25.6179 10.3383 26.1329 10.125 26.67 10.125H32.1348C28.9083 6.372 24.2967 4.05 19.245 4.05C12.765 4.05 7.014 7.8705 3.9765 13.6161C3.79154 13.9812 3.51056 14.2891 3.16375 14.5065C2.81695 14.7239 2.41745 14.8426 2.0082 14.85C0.558301 14.85 -0.4488 13.4109 0.2019 12.1149C3.8253 4.9383 10.9398 0 19.245 0C25.7412 0 31.5084 3.0213 35.445 7.7706ZM26.7186 38.475C31.7811 38.475 33.4686 34.2441 33.4686 29.025C33.4686 23.8059 31.7811 19.575 26.7186 19.575C21.6561 19.575 19.9686 23.8059 19.9686 29.025C19.9686 34.2441 21.6561 38.475 26.7186 38.475ZM28.5438 33.5799C28.4059 33.8294 28.2036 34.0373 27.9579 34.182C27.7716 34.2846 27.4071 34.425 26.7186 34.425C26.0301 34.425 25.6656 34.2846 25.4766 34.182C25.2319 34.0371 25.0305 33.8291 24.8934 33.5799C24.4101 32.8023 24.0186 31.32 24.0186 29.025C24.0186 26.73 24.4101 25.2477 24.8934 24.4674C25.0316 24.2188 25.2339 24.0118 25.4793 23.868C25.6656 23.7654 26.0301 23.625 26.7186 23.625C27.4071 23.625 27.7716 23.7654 27.9606 23.868C28.2053 24.013 28.4066 24.2209 28.5438 24.4701C29.0271 25.2477 29.4186 26.73 29.4186 29.025C29.4186 31.32 29.0271 32.8023 28.5438 33.5826V33.5799ZM15.2436 21.6C15.2438 21.2126 15.133 20.8333 14.9242 20.5071C14.7154 20.1808 14.4174 19.9213 14.0655 19.7593C13.7136 19.5973 13.3227 19.5396 12.9391 19.5931C12.5554 19.6466 12.1951 19.809 11.901 20.061L7.176 24.111C6.9739 24.284 6.80785 24.4952 6.68735 24.7324C6.56684 24.9696 6.49424 25.2282 6.47368 25.4934C6.45312 25.7587 6.48501 26.0254 6.56753 26.2784C6.65004 26.5313 6.78157 26.7655 6.9546 26.9676C7.30405 27.3758 7.80133 27.6284 8.33705 27.6699C8.60231 27.6905 8.86902 27.6586 9.12195 27.5761C9.37489 27.4936 9.6091 27.362 9.8112 27.189L11.1936 26.001V36.45C11.1936 36.9871 11.4069 37.5021 11.7867 37.8819C12.1665 38.2617 12.6815 38.475 13.2186 38.475C13.7557 38.475 14.2707 38.2617 14.6505 37.8819C15.0303 37.5021 15.2436 36.9871 15.2436 36.45V21.6Z' />
        </svg>
      </div>
    </div>
  );
}

export default PlayerButtons;
