import React, { useState, useEffect } from "react";
import FadeIn from '../shared/fadein';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Home = () => {

  const [data, setData] = useState([]);
  const url = 'https://pareta-strapi.fly.dev/api/homepage';
  
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
      <link rel="canonical" href="https://www.paretainnovations.com/"/>
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

        <img src={data.heroLink} className='w-full h-60 lg:h-120 object-cover' alt="buss image"/>

        <div className='bg-white py-10 px-8 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-70 flex flex-col justify-center items-center'>

            <div className="text-black text-center mb-8 lg:mb-12 text-xl lg:text-3xl" dangerouslySetInnerHTML={{__html: data.overviewTitle }}></div>

            <div className="text-xl lg:text-2xl" dangerouslySetInnerHTML={{__html: data.overview }}></div>
        </div>

        <section className='px-0 md:px-20 lg:px-30 xl:px-60 2xl:px-70'>
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 lg:col-span-6 bg-blue-900">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-10">
                <div className="flex flex-col items-center justify-center">
                  <img src={data.leftIconLink} className="w-12 mb-4" alt="battery icon"/>
                  <h3 className="text-white font-poppins font-bold text-xl lg:text-2xl text-center mb-6">{data.leftBlockTitle}</h3>
                  <ul>
                    <li className="text-white text-lg lg:text-xl text-center font-poppins mb-2">{data.leftBlockItem1}</li>
                    <li className="text-white text-lg lg:text-xl text-center font-poppins mb-2">{data.leftBlockItem2}</li>
                    <li className="text-white text-lg lg:text-xl text-center font-poppins mb-2">{data.leftBlockItem3}</li>
                    <li className="text-white text-lg lg:text-xl text-center font-poppins mb-2">{data.leftBlockItem4}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 bg-purple-500">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-10 h-full">
                <div className="flex flex-col items-center justify-center h-full">
                
                    <img src={data.rightIconLink} className="w-12 mb-4" alt="motor icon"/>
                    <h3 className="text-white font-poppins font-bold text-xl lg:text-2xl text-center mb-6">{data.rightBlockTitle}</h3>
                    <ul>
                      <li className="text-white text-lg lg:text-xl text-center font-poppins mb-2">{data.rightBlockItem1}</li>
                      <li className="text-white text-lg lg:text-xl text-center font-poppins mb-2">{data.rightBlockItem2}</li>
                      <li className="text-white text-lg lg:text-xl text-center font-poppins mb-2">{data.rightBlockItem3}</li>
                      <li className="text-white text-lg lg:text-xl text-center font-poppins mb-2">{data.rightBlockItem4}</li>
                    </ul>
                
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='bg-white py-10 px-6 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-70 flex flex-col justify-center items-center'>
          <p className='text-black text-center text-xl lg:text-2xl mb-8'>{data.bottomText}</p>
        </div>

        <div className='px-6 md:px-20 lg:px-30 xl:px-80 2xl:px-70 mb-20'>
        <h3 className='text-black text-center text-2xl font-bold lg:text-3xl mb-10'>{data.sliderTitle}</h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mb-6 [&_.swiper-wrapper]:mb-12 [&_.swiper-pagination-bullet]:!w-3 [&_.swiper-pagination-bullet]:!h-3 [&_.swiper-pagination-bullet-active]:!bg-cyan-600"
        >
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src={data.sliderImageLink1} className='h-30 w-48 object-contain' alt={data.sliderImageAlt1} /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src={data.sliderImageLink2} className='h-30 w-48 object-contain' alt={data.sliderImageAlt2} /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src={data.sliderImageLink3} className='h-30 w-48 object-contain' alt={data.sliderImageAlt3} /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src={data.sliderImageLink4} className='h-30 w-48 object-contain' alt={data.sliderImageAlt4} /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src={data.sliderImageLink5} className='h-30 w-48 object-contain' alt={data.sliderImageAlt5} /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src={data.sliderImageLink6} className='h-30 w-48 object-contain' alt={data.sliderImageAlt6} /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src={data.sliderImageLink7} className='h-30 w-48 object-contain' alt={data.sliderImageAlt7} /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src={data.sliderImageLink8} className='h-30 w-48 object-contain' alt={data.sliderImageAlt8} /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src={data.sliderImageLink9} className='h-30 w-48 object-contain' alt={data.sliderImageAlt9} /></div></SwiperSlide>
        </Swiper>
      </div>

      </FadeIn>
    </>
  )
};

export default Home;
