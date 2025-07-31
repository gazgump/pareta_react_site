import React, { useState, useEffect } from "react";
import FadeIn from '../shared/fadein';

const About = () => {

  const [data, setData] = useState([]);
  const url = 'https://pareta-strapi.fly.dev/api/about';
    
  
     useEffect(() => {
  
      fetch(url)
      .then(response => response.json())
      .then(response => {
        setData(response.data);
      })
  
      .catch(error => {
          console.error('Error:', error);
      });
    });

  return (
    <>
      <meta name="title" content={`${data.metaTitle}`} />
      <meta name="description" content={`${data.metaDescription}`} />
      <title>{`${data.metaTitle}`}</title>
      <link rel="canonical" href="https://www.paretainnovations.com/about"/>
      <meta property="og:title" content={`${data.metaTitle}`} key="og:title" />
      <meta
        property="og:description"
        content={`${data.metaDescription}`}
        key="og:description"
      />
      <meta name="keywords" content={`${data.keywords}`} />
      <FadeIn delay={100} duration={1000}>
        <div className="relative bg-cyan-900 opacity-75 w-full h-[60px] flex items-center justify-center">
          <h1 className="z-2 text-white text-lg text-center lg:text-xl">{data.tagline}</h1>
        </div>
        <div className='bg-white py-10 px-6 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-80 flex flex-col justify-center items-center'>
          <div dangerouslySetInnerHTML={{__html: data.overview }}></div>
        </div>

         <section className='px-6 md:px-20 lg:px-30 xl:px-60 2xl:px-80 pb-12 lg:pb-20'>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src={data.leftImageLink} className='rounded-xl w-full h-80 object-cover mb-6 lg:mb-0' alt={data.leftImageAlt}/>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src={data.rightImageLink} className='rounded-xl w-full h-80 object-cover mb-6 lg:mb-0' alt={data.rightImageAlt}/>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 lg:col-span-6 bg-gray-500">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">
                
                   <div className='flex flex-start items-center mb-6'>
                    <img src={data.blockIconLink} className="w-6 mr-4" alt="label icon"/>
                    <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">{data.blockTitle1}</h3>
                  </div>
                  
                  <p className='text-white mb-8'>{data.blockText1}</p>
               
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 bg-gray-800">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">

                   <div className='flex flex-start items-center mb-6'>
                    <img src={data.blockIconLink} className="w-6 mr-4" alt="label icon"/>
                    <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">{data.blockTitle2}</h3>
                  </div>
                  <p className='text-white mb-8'>{data.blockText2}</p>
             
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 bg-gray-500 lg:bg-gray-800">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">

                   <div className='flex flex-start items-center mb-6'>
                    <img src={data.blockIconLink} className="w-6 mr-4" alt="label icon"/>
                    <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">{data.blockTitle3}</h3>
                  </div>
                  <p className='text-white mb-8'>{data.blockText3}</p>
             
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 bg-gray-800 lg:bg-gray-500">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">

                   <div className='flex flex-start items-center mb-6'>
                    <img src={data.blockIconLink} className="w-6 mr-4" alt="label icon"/>
                    <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">{data.blockTitle4}</h3>
                  </div>
                  <div dangerouslySetInnerHTML={{__html: data.blockList4 }}></div>
              </div>
            </div>
          </div>
        </section>

      </FadeIn>
    </>
  )
};

export default About;
