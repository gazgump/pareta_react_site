import FadeIn from '../shared/fadein';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Home = () => {


  return (
    <>
      <FadeIn delay={100} duration={1000}>
        <div className="relative bg-cyan-900 opacity-75 w-full h-[60px] flex items-center justify-center">
          <h1 className="z-2 text-white text-lg text-center lg:text-xl">Powering Tomorrow's Mobility — Sustainably.</h1>
        </div>

        <img src="https://res.cloudinary.com/pareta/image/upload/v1753440577/Buses_xn0zgn.jpg" className='w-full h-60 lg:h-120 object-cover' alt="buss image"/>

        <div className='bg-white py-10 px-8 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-80 flex flex-col justify-center items-center'>

            <h2 className='text-black text-center text-lg lg:text-xl mb-8'><span className='font-bold'>Cutting edge</span> research and development, leading the way to <span className='font-bold'>sustainable</span> and <span className='font-bold'>environmentally friendly</span> advances in electric propulsion and energy storage.</h2>

            <p className='text-black text-center mb-8'>As global leaders in sustainable technologies, Pareta delivers patented solutions that revolutionise electric drivetrains and energy storage. Our segmented motor architecture achieves unprecedented superior power density and efficiency, enabling extended EV range and lower emissions. Our innovative bio-waste derived anode materials provide a recyclable, non-toxic alternative to conventional lithium-ion battery technology, generating enhanced performance but with competitive costs.</p>

            <p className='text-black text-center mb-8'>Our patented hard carbon anode material, sustainably made from bio-waste, delivers batteries that combine superior performance, higher efficiency and greater economy.</p>

            <p className='text-black text-center'>Our patented Pareta® electric drive systems unlock unmatched performance that electrifies the future of sustainable transportation and e-Mobility.</p>
        </div>

        <section className='px-0 md:px-20 lg:px-30 xl:px-60 2xl:px-80'>
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 lg:col-span-6 bg-gray-500">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">
                <div className="flex flex-col items-center justify-center">
                  <svg className='fill-none mb-4 w-12' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10V14M11.5 10V14M21 13V11M6.2 18H16.8C17.9201 18 18.4802 18 18.908 17.782C19.2843 17.5903 19.5903 17.2843 19.782 16.908C20 16.4802 20 15.9201 20 14.8V9.2C20 8.0799 20 7.51984 19.782 7.09202C19.5903 6.71569 19.2843 6.40973 18.908 6.21799C18.4802 6 17.9201 6 16.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="text-white font-poppins font-bold text-lg lg:text-xl text-center mb-6">Battery Technology</h3>
                  <ul>
                    <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">No Lithium</li>
                    <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">No Cobalt</li>
                    <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">No Nickel</li>
                    <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">Bio waste re-use</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 bg-gray-900 lg:flex lg:items-center">
              <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">
                <div className="flex flex-col items-center justify-center">
                  
                  <svg className='fill-white w-12 mb-4' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 491.52 491.52">
                  <g>
                    <g>
                      <path d="M471.04,163.84h-32.768c-8.192,0-16.384,6.144-20.48,14.336l-18.432,81.92l-14.336-40.96
                        c0-8.192-8.192-14.336-16.384-14.336h-40.96v-20.48c0-12.288-8.192-20.48-20.48-20.48H81.92c-10.24,0-20.48,8.192-20.48,20.48
                        v163.84c0,2.048,0,6.144,2.048,8.192l28.672,61.44c4.096,8.192,10.24,12.288,18.432,12.288H358.4
                        c8.192,0,14.336-4.096,18.432-10.24l18.432-30.72h6.144l18.432,49.152c4.096,8.192,10.24,12.288,18.432,12.288h32.768
                        c12.288,0,20.48-8.192,20.48-20.48V184.32C491.52,172.032,483.328,163.84,471.04,163.84z M458.752,421.888l-24.576-61.44
                        c-4.096-6.144-10.24-12.288-20.48-12.288h-32.768c-8.192,0-14.336,4.096-18.432,10.24l-16.384,30.72H124.928L102.4,344.064V204.8
                        h184.32v20.48c0,12.288,8.192,20.48,20.48,20.48h47.104l8.192,26.624c2.048,8.192,10.24,14.336,18.432,14.336h32.768
                        c8.192,0,16.384-6.144,20.48-14.336l24.576-81.92V421.888z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M81.92,266.24H20.48C8.192,266.24,0,274.432,0,286.72c0,12.288,10.24,20.48,20.48,20.48h61.44
                        c12.288,0,20.48-8.192,20.48-20.48C102.4,274.432,94.208,266.24,81.92,266.24z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M20.48,225.28C8.192,225.28,0,233.472,0,245.76v81.92c0,12.288,8.192,20.48,20.48,20.48c12.288,0,20.48-8.192,20.48-20.48
                        v-81.92C40.96,233.472,32.768,225.28,20.48,225.28z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M245.76,102.4h-81.92c-10.24,0-20.48,8.192-20.48,20.48v61.44c0,12.288,10.24,20.48,20.48,20.48h81.92
                        c12.288,0,20.48-8.192,20.48-20.48v-61.44C266.24,110.592,258.048,102.4,245.76,102.4z M225.28,163.84h-40.96v-20.48h40.96V163.84
                        z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M286.72,40.96H122.88c-10.24,0-20.48,8.192-20.48,20.48v61.44c0,12.288,10.24,20.48,20.48,20.48h163.84
                        c12.288,0,20.48-8.192,20.48-20.48V61.44C307.2,49.152,299.008,40.96,286.72,40.96z M266.24,102.4H143.36V81.92h122.88V102.4z"/>
                    </g>
                  </g>
                  </svg>
                  <h3 className="text-white font-poppins font-bold text-lg lg:text-xl text-center mb-6">Motor Technology</h3>
                  <ul>
                    <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">Minimal Copper</li>
                    <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">Modular, repairable</li>
                    <li className="text-white text-base lg:text-lg text-center font-poppins mb-2">Ultra reliable - no brakes needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='bg-white py-10 px-6 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-80 flex flex-col justify-center items-center'>
          <p className='text-black text-center mb-8'>Pareta’s technology is expected to provide game changing solutions across the industry including grid load levelling, transport, renewables, defence and portable electronics. With over 20 patents worldwide filed in the last 5 years the company is at the very forefront of this fast-paced industry and with significant progress a monthly occurrence, DG Innovate is on track to take a world leading position. Our ethical and ecological values are what drive our quest for innovation and sustainable solutions with key elements of our work independently verified by UK National Physical Laboratory.</p>
        </div>

        <div className='px-6 md:px-20 lg:px-30 xl:px-80 2xl:px-80 mb-20'>
        <h3 className='text-black text-center text-base lg:text-2xl mb-6'>Our Partners</h3>
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
