import React from 'react';
import pareta from '../assets/pareta-logo.png';

function Holding() {

  return (
    <div className='flex flex-col w-full h-svh max-h-full px-6 items-center justify-center'>
       <img src={pareta} alt="pareta logo"/>
       <div className='flex flex-col'>
        <h1 className='text-xl md:text-xl lg:text-2xl xl:text-4xl text-center text-white mt-8 lg:mt-12'>The Pareta Innovations website is under construction and coming soon…</h1>
        <h3 className='text-md md:text-l lg:text-xl xl:text-2xl text-center text-white mt-6 lg:mt-8'>In the meantime please contact us via <a className="text-cyan-300" href="mailto:investors@paretainnovations.com" target="_blank">investors@paretainnovations.com</a>.</h3>
       </div>
    </div>
  )
}

export default Holding