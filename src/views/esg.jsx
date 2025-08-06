import React, { useState, useEffect } from "react";
import FadeIn from '../shared/fadein';

const Esg = () => {

  const [data, setData] = useState([]);

  const url = 'https://pareta-strapi.fly.dev/api/esg';
    
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
      <link rel="canonical" href="https://www.paretainnovations.com/technologies"/>
      <meta property="og:title" content={`${data.metaTitle}`} key="og:title" />
      <meta
        property="og:description"
        content={`${data.metaDescription}`}
        key="og:description"
      />
      <meta name="keywords" content={`${data.keywords}`} />
      <FadeIn delay={100} duration={1000}>
        <div className="relative bg-purple-500 opacity-75 w-full h-auto min-h-[80px] lg:h-[80px] flex items-center justify-center">
          <h1 className="z-2 text-white text-2xl font-bold italic text-center lg:text-4xl">{data.tagline}</h1>
        </div>
        <div className='bg-white py-10 px-8 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-70 flex flex-col justify-center items-center'>
          <div className="text-xl lg:text-2xl" dangerouslySetInnerHTML={{__html: data.overview }}></div>
        </div>

         <section className='px-6 md:px-20 lg:px-30 xl:px-60 2xl:px-70 pb-12 lg:pb-20'>
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

        <div className="col-span-12 bg-gray-800">
          <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">
              <div className='flex flex-col items-center'>
                <img src={data.bannerIconLink} className="w-12 mb-4" alt={data.bannerIconAlt}/>

                <h3 className="text-white text-center font-poppins font-bold text-xl lg:text-3xl">{data.bannerText}</h3>
              </div>
          </div>
        </div>
      </FadeIn>
    </>
  )
};

export default Esg;