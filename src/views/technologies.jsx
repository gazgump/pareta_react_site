import React, { useState, useEffect } from "react";
import FadeIn from '../shared/fadein';
import video_url from '../assets/video/pareta_motor.mp4';

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
        <div className="relative bg-purple-500 opacity-75 w-full h-auto min-h-[80px] lg:h-[80px] flex items-center justify-center">
          <h1 className="z-2 text-white text-2xl font-bold italic text-center lg:text-4xl">{data.tagline}</h1>
        </div>

        <section className='px-6 xl:px-40 2xl:px-70 mt-12'>
          <div className="col-span-12 bg-gray-100 rounded-xl">
            <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">

                <div className='flex flex-start items-center justify-center mb-6'>
                  <img src={data.bannerIconLink} className="w-10 mr-4" alt="label icon"/>
                  <h3 className="text-black text-center font-poppins font-bold text-xl lg:text-3xl">{data.bannerTitle}</h3>
                </div>
                
                <ul>
                  <li className='mb-2 lg:mb-4 text-black text-center text-lg lg:text-2xl'>{data.bannerItem1}</li>

                  <li className='mb-2 lg:mb-4 text-black text-center text-lg lg:text-2xl'>{data.bannerItem2}</li>

                  <li className='mb-2 lg:mb-4 text-black text-center text-lg lg:text-2xl'>{data.bannerItem3}</li>

                  <li className='mb-2 lg:mb-4 text-black text-center text-lg lg:text-2xl'>{data.bannerItem4}</li>
                </ul>
            
            </div>
          </div>
        </section>

        <div className='bg-white py-10 px-8 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-70 flex flex-col justify-center items-center'>
            <div className="text-lg lg:text-2xl" dangerouslySetInnerHTML={{__html: data.overview }}></div>
        </div>

         <section className='px-6 xl:px-40 2xl:px-70 mb-16'>
          <video src={video_url} className="w-full h-full px-4" controls></video>
        </section>  

        <section className='px-6 md:px-20 lg:px-30 xl:px-60 2xl:px-70 pb-12 lg:pb-20'>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-4">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src={data.image1Link} className='rounded-xl w-full h-48 object-cover mb-6 lg:mb-0' alt="scientist lab"/>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src={data.image2Link} className='rounded-xl w-full h-48 object-cover mb-6 lg:mb-0' alt="motor"/>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="2xl:container 2xl:mx-auto px-4">
                <img src={data.image3Link} className='rounded-xl w-full h-48 object-cover mb-6 lg:mb-0' alt="machines lab"/>
              </div>
            </div>
          </div>
        </section>

      </FadeIn>
    </>
  )
};

export default Technologies;