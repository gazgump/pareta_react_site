import React, { useState, useEffect } from "react";
import FadeIn from '../shared/fadein';

const Technologies = () => {

  const [data, setData] = useState([]);
    const url = 'https://pareta-strapi.fly.dev/api/technology';
      
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
      <div className="relative bg-cyan-900 opacity-75 w-full h-[60px] flex items-center justify-center">
          <h1 className="z-2 text-white text-lg text-center lg:text-xl">{data.tagline}</h1>
        </div>
        <div className='bg-white py-10 px-8 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-80 flex flex-col justify-center items-center'>
            <div dangerouslySetInnerHTML={{__html: data.overview }}></div>
        </div>

        <section className='px-6 md:px-20 lg:px-30 xl:px-60 2xl:px-80 pb-12 lg:pb-20'>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-4">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src={data.image1Link} className='rounded-xl w-full mb-6 lg:mb-0' alt="scientist lab"/>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src={data.image2Link} className='rounded-xl w-full mb-6 lg:mb-0' alt="motor"/>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src={data.image3Link} className='rounded-xl w-full mb-6 lg:mb-0' alt="machines lab"/>
              </div>
            </div>
          </div>
        </section>

        <div className="col-span-12 bg-gray-800">
          <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">

              <div className='flex flex-start items-center justify-center mb-6'>
                <img src={data.bannerIconLink} className="w-6 mr-4" alt="label icon"/>
                <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">{data.bannerTitle}</h3>
              </div>
              
              <ul>
                <li className='mb-2 text-center text-base text-lg'>{data.bannerItem1}</li>

                <li className='mb-2 text-center text-base text-lg'>{data.bannerItem2}</li>

                <li className='mb-2 text-center text-base text-lg'>{data.bannerItem3}</li>

                <li className='mb-2 text-center text-base text-lg'>{data.bannerItem4}</li>
              </ul>
          
          </div>
        </div>
      </FadeIn>
    </>
  )
};

export default Technologies;