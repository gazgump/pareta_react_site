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
        <div className="relative bg-cyan-900 opacity-75 w-full h-[60px] flex items-center justify-center">
          <h1 className="z-2 text-white text-lg text-center lg:text-xl">{data.tagline}</h1>
        </div>

        <img src={data.heroLink} className='w-full h-60 lg:h-120 object-cover' alt="buss image"/>

        <div className='bg-white py-10 px-8 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-80 flex flex-col justify-center items-center'>

            <div dangerouslySetInnerHTML={{__html: data.overviewTitle }}></div>

            <div dangerouslySetInnerHTML={{__html: data.overview }}></div>
        </div>

        <section className='px-0 md:px-20 lg:px-30 xl:px-60 2xl:px-80'>
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 lg:col-span-6 bg-gray-500">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-10">
                <div className="flex flex-col items-center justify-center">
                  <img src={data.leftIconLink} className="w-12 mb-4" alt="battery icon"/>
                  <h3 className="text-white font-poppins font-bold text-lg lg:text-xl text-center mb-6">{data.leftBlockTitle}</h3>
                  <ul>
                    <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">{data.leftBlockItem1}</li>
                    <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">{data.leftBlockItem2}</li>
                    <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">{data.leftBlockItem3}</li>
                    <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">{data.leftBlockItem4}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 bg-gray-900">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-10 h-full">
                <div className="flex flex-col items-center justify-center h-full">
                
                    <img src={data.rightIconLink} className="w-12 mb-4" alt="motor icon"/>
                    <h3 className="text-white font-poppins font-bold text-lg lg:text-xl text-center mb-6">{data.rightBlockTitle}</h3>
                    <ul>
                      <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">{data.rightBlockItem1}</li>
                      <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">{data.rightBlockItem2}</li>
                      <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">{data.rightBlockItem3}</li>
                      <li className="text-white text-base lg:text-lg text-center font-poppins mb-2"></li>
                    </ul>
                
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='bg-white py-10 px-6 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-80 flex flex-col justify-center items-center'>
          <p className='text-black text-center mb-8'>{data.bottomText}</p>
        </div>

        <div className='px-6 md:px-20 lg:px-30 xl:px-80 2xl:px-80 mb-20'>
        <h3 className='text-black text-center text-base lg:text-2xl mb-6'>{data.sliderTitle}</h3>
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
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src="https://res.cloudinary.com/pareta/image/upload/v1753440659/south_wenlgf.jpg" className='h-30 w-48 object-contain' alt="Southampton Uni" /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src="https://res.cloudinary.com/pareta/image/upload/v1753440648/sheff_ak6syh.jpg" className='h-30 w-48 object-contain' alt="Sheffield Uni" /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src="https://res.cloudinary.com/pareta/image/upload/v1753440644/qm_fflzmi.jpg" className='h-30 w-48 object-contain' alt="Queen Mary Uni London" /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src="https://res.cloudinary.com/pareta/image/upload/v1753440614/LSBU_si9kvc.jpg" className='h-30 w-48 object-contain' alt="London South Bank Uni" /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src="https://res.cloudinary.com/pareta/image/upload/v1753440608/jaume_letek7.jpg" className='h-30 w-48 object-contain' alt="Unversitat Jaume 1" /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src="https://res.cloudinary.com/pareta/image/upload/v1753440598/exeter_yiyzr5.jpg" className='h-30 w-48 object-contain' alt="University of Exeter" /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src="https://res.cloudinary.com/pareta/image/upload/v1753440577/camb_ad2lao.jpg" className='h-30 w-48 object-contain' alt="University of Cambridge" /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src="https://res.cloudinary.com/pareta/image/upload/v1753440643/qinetiq_ubbbci.png" className='h-30 w-48 object-contain' alt="Qinetiq" /></div></SwiperSlide>
          <SwiperSlide><div className='border-gray-300 border-1 p-4 rounded-xl flex justify-center items-center'><img src="https://res.cloudinary.com/pareta/image/upload/v1753440634/npl_i5g1cs.jpg" className='h-30 w-48 object-contain' alt="National Physics Lab" /></div></SwiperSlide>
        </Swiper>
      </div>

      </FadeIn>
    </>
  )
};

export default Home;
