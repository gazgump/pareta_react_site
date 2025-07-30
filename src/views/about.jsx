import FadeIn from '../shared/fadein';

const About = () => {
  return (
    <>
      <FadeIn delay={100} duration={1000}>
        <div className="relative bg-cyan-900 opacity-75 w-full h-[60px] flex items-center justify-center">
          <h1 className="z-2 text-white text-lg text-center lg:text-xl">About Pareta Innovations</h1>
        </div>
        <div className='bg-white py-10 px-6 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-80 flex flex-col justify-center items-center'>
          <p className='text-black text-center mb-8'>We help meet the world’s carbon reduction targets with our revolutionary technologies to transform the carbon-intensive transportation and energy storage sectors. These key industries produce a high percentage of global emissions, yet to date, they lack the implementation of technological breakthroughs needed to decarbonise.</p>

          <p className='text-black text-center mb-8'>Conventional drivetrains deliver suboptimal efficiency and power density, limiting the performance and range of electric vehicles. Safety issues, scarcity of materials, and poor recyclability hamper legacy batteries. Despite the growing urgency of climate change, many still rely on outdated technologies that hinder decarbonisation. Continuing on this trajectory will lead to a bleak future where the planet continues to warm as emissions keep rising.</p>
        </div>

         <section className='px-6 md:px-20 lg:px-30 xl:px-60 2xl:px-80 pb-12 lg:pb-20'>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src="https://res.cloudinary.com/pareta/image/upload/v1753440610/join-us_ij1xnu.jpg" className='rounded-xl w-full h-80 object-cover mb-6 lg:mb-0' alt="team"/>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src="https://res.cloudinary.com/pareta/image/upload/v1753440589/deregallera-office_cexxsh.jpg" className='rounded-xl w-full h-80 object-cover mb-6 lg:mb-0' alt="office"/>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 lg:col-span-6 bg-gray-500">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">
                
                   <div className='flex flex-start items-center mb-6'>
                    <svg className='w-6 fill-white mr-4' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15,12a1,1,0,1,0,1-1A1,1,0,0,0,15,12Zm6.71-.71-5-5A1,1,0,0,0,16,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H16a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM15.59,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H15.59l4,4Z"/></svg>
                    <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">Our Origin</h3>
                  </div>
                  
                  <p className='text-white mb-8'>Formed in 2025 following the acquisition of advanced motor IP from DGI Plc. Headquartered in Wales, UK. Legacy from Deregalleria – DGI – Pareta</p>
               
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 bg-gray-800">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">

                   <div className='flex flex-start items-center mb-6'>
                    <svg className='w-6 fill-white mr-4' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15,12a1,1,0,1,0,1-1A1,1,0,0,0,15,12Zm6.71-.71-5-5A1,1,0,0,0,16,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H16a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM15.59,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H15.59l4,4Z"/></svg>
                    <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">Our Mission</h3>
                  </div>
                  <p className='text-white mb-8'>Accelerate the decarbonisation of transport through modular, high-efficiency electric motor systems.</p>
             
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 bg-gray-500 lg:bg-gray-800">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">

                   <div className='flex flex-start items-center mb-6'>
                    <svg className='w-6 fill-white mr-4' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15,12a1,1,0,1,0,1-1A1,1,0,0,0,15,12Zm6.71-.71-5-5A1,1,0,0,0,16,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H16a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM15.59,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H15.59l4,4Z"/></svg>
                    <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">Sustainability Commitment</h3>
                  </div>
                  <p className='text-white mb-8'>Enabling commercial EV adoption through affordable retrofits and efficient motors for cleaner logistics.</p>
             
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 bg-gray-800 lg:bg-gray-500">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">

                   <div className='flex flex-start items-center mb-6'>
                    <svg className='w-6 fill-white mr-4' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15,12a1,1,0,1,0,1-1A1,1,0,0,0,15,12Zm6.71-.71-5-5A1,1,0,0,0,16,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H16a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM15.59,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H15.59l4,4Z"/></svg>
                    <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">ESG Focus</h3>
                  </div>
                  <ul>
                    <li>Supports zero-emission mobility targets</li>

                    <li>Promotes circularity via vehicle retrofitting</li>

                    <li>Open to university collaboration and student-led R&D</li>
                  </ul>
              </div>
            </div>
          </div>
        </section>

      </FadeIn>
    </>
  )
};

export default About;
