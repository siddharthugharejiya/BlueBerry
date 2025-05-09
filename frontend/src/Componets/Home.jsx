import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Nav from './Nav';
import { Pagination } from 'swiper/modules';
import { listenerCount } from 'npm';


function Home() {
  return (
    <>
      <Nav />
      {/* slider */}
      <div className="h-screen w-full bg-[#F8F8FB] relative overflow-hidden">
        <div className="grid grid-col sm:grid-cols-2 h-full w-full">

          <div className=" h-full w-full ">
            <div className='flex text-qu flex-col justify-center h-full ms-28 mb-2'>
              <span className='text-xl text-[#777] mb-4 ms-1'>Flat 30% off</span>
              <div className='p-0 m-0 2xl:text-7xl  md:text-3xl sm:text-xl text-4xl mb-5 text-[#3d4750] font-semibold'>Explore <b className='text-[#6c7fd8] relative'>Healthy</b> <div className='relative'><img src="./shape.png" alt="shape" className='absolute 2xl:top-[-115px] 2xl:right-[60px] xl:top-[-95px] xl:right-[248px] lg:top-[-90px] lg:right-[125px] md:top-[-90px] md:right-[0px] sm:top-[-72px] sm:right-[10px] top-[-70px] right-[90px]' /></div> <br />
                & Fresh Fruits
              </div>
              <div>

                <button className='mt-2 px-6 py-3 border border-black hover:bg-[#6c7fd8] hover:text-white transition duration-500 rounded-xl w-fit'>Shop Now </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center h-full w-full relative ">
            <img src="./hero-1.png" alt="Hero" className="drop-shadow-3xl 2xl:max-w-[70%] xl:max-w-[70%] lg:max-w-[70%] md:max-w-[66%] sm:max-w-[66%] max-w-[75%] object-cover min-w-[45%] max-h-[70%] z-30" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              className="animate-shape  w-[120%] absolute sm:top-[95px] xl:top-[-20px] lg:top-[-20px] md:top-[40px] top-[10px] right-[-50px] max-[1399px]:right-[-30px] max-[1199px]:w-[125%] max-[991px]:w-[100%] max-[991px]:top-[0px] max-[575px]:right-[0] max-[420px]:w-[110%] max-[420px]:right-[-30px]"
            >
              <linearGradient id="shape_1" x1="100%" x2="0%" y1="100%" y2="0%" />
              <path fill="white">
                <animate
                  repeatCount="indefinite"
                  attributeName="d"
                  dur="15s"
                  values="
                  M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 
                  c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 
                  c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 
                  c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;

                  M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4
                  C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 
                  c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 
                  C48.9,198.6,57.8,191,51,171.3z;

                  M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 
                  c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 
                  c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 
                  c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                />
              </path>
            </svg>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
