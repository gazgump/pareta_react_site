import FadeIn from '../shared/fadein';

const Solutions = () => {
  return (
    <FadeIn delay={100} duration={1000}>
      <div className="relative bg-cyan-900 opacity-75 w-full h-[60px] flex items-center justify-center">
        <h1 className="z-2 text-white text-lg text-center lg:text-xl">Transformative Solutions</h1>
      </div>

      <div className='bg-white py-10 px-8 lg:py-10 md:px-20 lg:px-30 xl:px-60 2xl:px-80 flex flex-col justify-center items-center'>
          <p className='text-black text-center mb-8'>Pareta is bringing transformative sustainable transport and energy storage solutions to automotive manufacturers, energy companies, battery manufacturers, and vehicle fleet operators. Leading automotive companies turn to us to realise enhanced performance and range targets for their newest EV models. Government departments leverage our expertise in high power-density systems to electrify defence vehicles. Global battery suppliers work with us to make sodium-ion solutions commercially viable. And logistics giants collaborate with us to customise electric drivetrains that equip their delivery fleets for a zero-emissions future.</p>

      </div>

      <section className='px-6 md:px-20 lg:px-30 xl:px-60 2xl:px-80 pb-0 lg:pb-20'>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src="https://res.cloudinary.com/pareta/image/upload/v1753440586/ClimateLeader_joh8ih.png" className='rounded-xl w-full h-80 object-cover mb-6 lg:mb-0' alt="team"/>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src="https://res.cloudinary.com/pareta/image/upload/v1753440589/Delivery_of_motor_ncskq1.jpg" className='rounded-xl w-full h-80 object-cover mb-6 lg:mb-0' alt="office"/>
              </div>
            </div>
          </div>
        </section>

      <div className='bg-white py-10 px-8 lg:py-10 md:px-20 lg:px-30 xl:px-60 2xl:px-80 flex flex-col justify-center items-center'>
          
          <p className='text-black text-center mb-8'>We help manufacturers, suppliers, OEMs, and operators to reimagine what’s possible, accelerate their decarbonisation timelines, achieve cost savings, and future-proof their operations while achieving meaningful climate progress. Our patented technologies help commercialise and scale the most cutting-edge sustainable designs, allowing our customers to lead markets worldwide. Together, we can achieve ambitious climate commitments while powering the sustainable revolution.</p>

      </div>

      <div className="col-span-12 bg-gray-800">
        <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">

            <div className='flex flex-start items-center justify-center mb-6'>
              <svg className='w-6 fill-white mr-4' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15,12a1,1,0,1,0,1-1A1,1,0,0,0,15,12Zm6.71-.71-5-5A1,1,0,0,0,16,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H16a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM15.59,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H15.59l4,4Z"/></svg>
              <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">Use Cases</h3>
            </div>

            <ul>
              <li className='mb-2 text-center text-base lg:text-lg'>Bus Retrofits</li>

              <li className='mb-2 text-center text-base lg:text-lg'>Light Commercial EV Fleets</li>

              <li className='mb-2 text-center text-base lg:text-lg'>Defense (hub motor systems)</li>

              <li className='mb-2 text-center text-base lg:text-lg'>Marine & Windfarm logistics</li>
            </ul>
        
        </div>
      </div>

    </FadeIn>
  )
};

export default Solutions;