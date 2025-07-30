import FadeIn from '../shared/fadein';

const Esg = () => {
  return (
    <FadeIn delay={100} duration={1000}>
     <div className="relative bg-cyan-900 opacity-75 w-full h-[60px] flex items-center justify-center">
          <h1 className="z-2 text-white text-lg text-center lg:text-xl">Innovation and ESG</h1>
      </div>
      <div className='bg-white py-10 px-8 lg:py-20 md:px-20 lg:px-30 xl:px-60 2xl:px-80 flex flex-col justify-center items-center'>
        <p className='text-black text-center mb-8'>At Pareta, sustainability permeates the core of our identity. Since our founding, we’ve been guided by a vision to revolutionise electric transport and energy storage through eco-conscious engineering. Effective environmental, social and governance policies fuel our success.</p>

        <p className='text-black text-center mb-8'>We lead the sustainable transformation of transportation and energy storage sectors that were once defined by pollution and waste. Our patented technologies pave the way for a net zero future by facilitating widespread EV adoption and clean battery reliance. We believe business growth and positive global impact go hand-in-hand.</p>

        <p className='text-black text-center mb-8'>Every facet of our operations, from supply chain to community engagement, is driven by an ethos of environmental stewardship and social responsibility. We forge partnerships to support people and protect ecosystems. Our team pushes the boundaries of innovation not just for shareholder value creation but for the betterment of humanity.</p>

        <p className='text-black text-center mb-8'>At Pareta, we know our revolutionary solutions represent more than advanced batteries and drivetrains – they represent hope for a sustainable future. We ensure the highest health, safety and ethical standards aren’t just met but exceeded across all of the environments with which we interact.</p>

        <p className='text-black text-center mb-8'>Progress starts with collective ambition backed by individual integrity. Together with our partners, we’re on a mission to decarbonise the planet while cultivating the well-being of people – because caring for one means caring for the other.</p>
      </div>

      <div className="col-span-12 bg-gray-800">
        <div className="2xl:container 2xl:mx-auto py-12 px-8 lg:px-24">
            <div className='flex flex-col items-center'>
              <svg className='fill-white mb-6 w-12' viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M493.556 -.063c-265.602 0 -482.306 209.741 -493.5 472.594 -.765 18.027 13 19.031 13 19.031l83.813 0c16.291 0 19.146 -9.297 19.531 -17.625 9.228 -199.317 175.315 -357.688 377.156 -357.688 107.739 0 204.915 45.163 273.719 117.563l-58.813 56.875c-10.23 12.319 -10.043 27.275 5.063 31.5l247.125 49.75c21.15 5.281 46.288 -10.747 37.656 -43.656l-58.375 -227.563c-1.482 -8.615 -15.924 -22.024 -29.406 -12.406l-64.094 60.031c-89.659 -91.567 -214.627 -148.406 -352.875 -148.406zm409.625 508.5c-16.291 0 -19.146 9.297 -19.531 17.625 -9.228 199.317 -175.315 357.688 -377.156 357.688 -107.739 0 -204.915 -45.132 -273.719 -117.531l58.813 -56.906c10.229 -12.319 10.043 -27.275 -5.063 -31.5l-247.125 -49.75c-21.15 -5.281 -46.288 10.747 -37.656 43.656l58.375 227.563c1.482 8.615 15.924 22.024 29.406 12.406l64.094 -60.031c89.659 91.567 214.627 148.406 352.875 148.406 265.602 0 482.306 -209.741 493.5 -472.594 .765 -18.027 -13 -19.031 -13 -19.031l-83.813 0z"/></svg>

              <h3 className="text-white text-center font-poppins font-bold text-lg lg:text-xl">“Join us in building the future of motion”</h3>
            </div>
        </div>
      </div>
    </FadeIn>
  )
};

export default Esg;