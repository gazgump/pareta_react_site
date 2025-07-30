import FadeIn from '../shared/fadein';

const Technologies = () => {
  return (
    <FadeIn delay={100} duration={1000}>
     <div className="relative bg-cyan-900 opacity-75 w-full h-[60px] flex items-center justify-center">
        <h1 className="z-2 text-white text-lg text-center lg:text-xl">Transformative Technologies</h1>
      </div>
      <div className='bg-white py-10 px-8 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-80 flex flex-col justify-center items-center'>

          <p className='text-black text-center mb-8'>Pareta is revolutionising sustainable transport and energy storage by powering the transition from costly, carbon-intensive technologies to high-performance sustainable innovations. For over a decade, DGI has pioneered cutting-edge battery and electric drivetrain solutions that propel industries toward a net zero future and beyond.</p>

          <p className='text-black text-center mb-8'>Our patented bio-waste derived hard carbon anode material for sodium-ion batteries makes sustainable energy storage affordable at scale, while our segmented EV motor architectures unlock unprecedented efficiency and power density, extending range and reducing emissions.</p>

      </div>

      <section className='px-6 md:px-20 lg:px-30 xl:px-60 2xl:px-80 pb-12 lg:pb-20'>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="2xl:container 2xl:mx-auto px-4">
              <img src="https://res.cloudinary.com/pareta/image/upload/v1753440628/Mtls-3_u4dmgw.jpg" className='rounded-xl w-full mb-6 lg:mb-0' alt="scientist lab"/>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="2xl:container 2xl:mx-auto px-4">
              <img src="https://res.cloudinary.com/pareta/image/upload/v1753440624/Motor-1_outsde.jpg" className='rounded-xl w-full mb-6 lg:mb-0' alt="motor"/>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="2xl:container 2xl:mx-auto px-4">
              <img src="https://res.cloudinary.com/pareta/image/upload/v1753440622/materials3_rmy3xk.jpg" className='rounded-xl w-full mb-6 lg:mb-0' alt="machines lab"/>
            </div>
          </div>
        </div>
      </section>

      <div className="col-span-12 bg-gray-800">
        <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">

             <div className='flex flex-start items-center justify-center mb-6'>
              <svg className='w-6 fill-white mr-4' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15,12a1,1,0,1,0,1-1A1,1,0,0,0,15,12Zm6.71-.71-5-5A1,1,0,0,0,16,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H16a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM15.59,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H15.59l4,4Z"/></svg>
              <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">USP Highlights</h3>
            </div>
            
            <ul>
              <li className='mb-2 text-center text-base text-lg'>Up to 98.5% Efficiency modular drive systems</li>

              <li className='mb-2 text-center text-base text-lg'>Scalable & Lightweight design – ideal for buses, marine, defense</li>

              <li className='mb-2 text-center text-base text-lg'>Regenerative braking integration</li>

              <li className='mb-2 text-center text-base text-lg'>Validated with OEMs – Cummins, EVage, UK MoD R&D</li>
            </ul>
        
        </div>
      </div>
     
    </FadeIn>
  )
};

export default Technologies;