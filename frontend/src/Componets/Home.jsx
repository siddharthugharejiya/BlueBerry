
import 'animate.css';
import 'swiper/css';
import 'swiper/css/pagination';
import Nav from './Nav';
import "../index.css"
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import SlickSliderComponent from './SlickSliderComponent';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../Redux/action';
import { useLayoutEffect } from 'react';


function Home() {

  const dispatch = useDispatch()
  const [eye, seteye] = useState([])
  const [open, setopen] = useState(false)

  useEffect(() => {
    const mainText = document.getElementById("mainText");
    const anim = document.querySelector("animateTransform");

    mainText.addEventListener("mouseenter", () => {
      anim.beginElement();
    });
  }, []);
  const products = useSelector(state => state.Products.data.data || [])
  console.log(products);

  const handleEye = (product) => {

    seteye(product)


    setopen(true)

  }
  console.log(open);
  console.log(eye);




  useLayoutEffect(() => {
    dispatch(Product())
  }, [dispatch])

  return (
    <>
      <Nav />
      {/* slider */}
      <div className='h-screen 2xl:h-[50%]'>


        <Swiper
          spaceBetween={50}
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet h-full w-full", }}


          loop={true} autoplay={{ delay: 7000 }}
          style={{ height: "100%", width: "100%" }}
        >
        <SwiperSlide>
            <div className="h-screen w-full bg-[#F8F8FB] relative overflow-hidden">
              <div className="grid grid-col sm:grid-cols-2 h-full w-full">
                <div className=" h-full w-full ">
                  <div className="flex text-qu flex-col justify-center h-full sm:ms-28 ms-2 mb-2">
                    <span
                      className="text-xl text-[#777] mb-4 ms-1 animate__animated animate__fadeInUp"
                      style={{ animationDelay: "0.3s", animationDuration: "0.8s" }}
                    >
                      Flat 30% off
                    </span>

                    <div
                      className="p-0 m-0 2xl:text-7xl md:text-3xl sm:text-xl text-4xl mb-5 text-[#3d4750] font-semibold animate__animated animate__fadeInUp"
                      style={{ animationDelay: "0.9s", animationDuration: "0.8s" }}
                    >
                      Explore
                      <div className="relative inline-block text-[#6c7fd8]">
                        Warm
                        <img
                          src="./shape.png"
                          alt="shape"
                          className="absolute w-9 h-9 md:w-8 md:h-8 sm:w-8 sm:h-8 sm:-top-5 sm:-right-5 -top-6 -right-6"
                        />
                      </div>
                      <br />

                      & Fresh Fruits
                    </div>

                    <div
                      className="animate__animated animate__fadeInUp"
                      style={{ animationDelay: "1.5s", animationDuration: "0.8s" }}
                    >
                      <button className="mt-2 px-6 py-3 border border-black hover:bg-[#6c7fd8] hover:text-white transition duration-500 rounded-xl w-fit">
                        Shop Now
                      </button>

                    </div>

                  </div>
                </div>


                <div className="flex items-center justify-center h-full w-full relative ">
                  <img src="./hero-1.png" alt="Hero" className="
                animate__animated
                animate__fadeInUp
                drop-shadow-3xl
                2xl:max-w-[70%] xl:max-w-[70%] 
                lg:max-w-[70%] md:max-w-[66%] 
                sm:max-w-[66%] max-w-[65%] 
                object-cover
                 min-w-[45%] max-h-[70%]
                  z-30" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 300"
                    className="animate-shape 
                    animate__animated
                animate__fadeInRight
                  w-[120%] absolute sm:top-[95px] xl:top-[-20px] lg:top-[-20px] md:top-[40px] top-[10px] right-[-50px] max-[1399px]:right-[-30px] max-[1199px]:w-[125%] max-[991px]:w-[100%] max-[991px]:top-[0px] max-[575px]:right-[0] max-[420px]:w-[110%] max-[420px]:right-[-30px]"
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


          </SwiperSlide>

          <SwiperSlide>
            <div className="h-screen w-full bg-[#F8F8FB] relative overflow-hidden">
              <div className="grid grid-col sm:grid-cols-2 h-full w-full">
                <div className=" h-full w-full ">
                  <div className="flex text-qu flex-col justify-center h-full sm:ms-28 ms-2 mb-2">
                    <span
                      className="text-xl text-[#777] mb-4 ms-1 animate__animated animate__fadeInUp"
                      style={{ animationDelay: "0.3s", animationDuration: "0.8s" }}
                    >
                      Flat 30% off
                    </span>

                    <div
                      className="p-0 m-0 2xl:text-7xl md:text-3xl sm:text-xl text-4xl mb-5 text-[#3d4750] font-semibold animate__animated animate__fadeInUp"
                      style={{ animationDelay: "0.9s", animationDuration: "0.8s" }}
                    >
                      Explore
                      <div className="relative inline-block text-[#6c7fd8]">
                        Warm
                        <img
                          src="./shape.png"
                          alt="shape"
                          className="absolute w-9 h-9 md:w-8 md:h-8 sm:w-8 sm:h-8 sm:-top-5 sm:-right-5 -top-6 -right-6"
                        />
                      </div>
                      <br />

                      & Fresh Fruits
                    </div>

                    <div
                      className="animate__animated animate__fadeInUp"
                      style={{ animationDelay: "1.5s", animationDuration: "0.8s" }}
                    >
                      <button className="mt-2 px-6 py-3 border border-black hover:bg-[#6c7fd8] hover:text-white transition duration-500 rounded-xl w-fit">
                        Shop Now
                      </button>

                    </div>

                  </div>
                </div>


                <div className="flex items-center justify-center h-full w-full relative ">
                  <img src="./hero-2.png" alt="Hero" className="
                animate__animated
                animate__fadeInUp
                drop-shadow-3xl
                2xl:max-w-[70%] xl:max-w-[70%] 
                lg:max-w-[70%] md:max-w-[66%] 
                sm:max-w-[66%] max-w-[65%] 
                object-cover
                 min-w-[45%] max-h-[70%]
                  z-30" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 300"
                    className="animate-shape 
                    animate__animated
                animate__fadeInRight
                  w-[120%] absolute sm:top-[95px] xl:top-[-20px] lg:top-[-20px] md:top-[40px] top-[10px] right-[-50px] max-[1399px]:right-[-30px] max-[1199px]:w-[125%] max-[991px]:w-[100%] max-[991px]:top-[0px] max-[575px]:right-[0] max-[420px]:w-[110%] max-[420px]:right-[-30px]"
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


          </SwiperSlide>



          <SwiperSlide>
            <div className="h-screen w-full bg-[#F8F8FB] relative overflow-hidden">
              <div className="grid grid-col sm:grid-cols-2 h-full w-full">
                <div className=" h-full w-full ">
                  <div className="flex text-qu flex-col justify-center h-full sm:ms-28 ms-2 mb-2">
                    <span
                      className="text-xl text-[#777] mb-4 ms-1 animate__animated animate__fadeInUp"
                      style={{ animationDelay: "0.3s", animationDuration: "0.8s" }}
                    >
                      Flat 30% off
                    </span>

                    <div
                      className="p-0 m-0 2xl:text-7xl md:text-3xl sm:text-xl text-4xl mb-5 text-[#3d4750] font-semibold animate__animated animate__fadeInUp"
                      style={{ animationDelay: "0.9s", animationDuration: "0.8s" }}
                    >
                      Explore
                      <div className="relative inline-block text-[#6c7fd8]">
                        Organic
                        <img
                          src="./shape.png"
                          alt="shape"
                          className="absolute w-9 h-9 md:w-8 md:h-8 sm:w-8 sm:h-8 sm:-top-5 sm:-right-5 -top-6 -right-6"
                        />
                      </div>
                      <br />

                      & Fresh Fruits
                    </div>

                    <div
                      className="animate__animated animate__fadeInUp"
                      style={{ animationDelay: "1.5s", animationDuration: "0.8s" }}
                    >
                      <button className="mt-2 px-6 py-3 border border-black hover:bg-[#6c7fd8] hover:text-white transition duration-500 rounded-xl w-fit">
                        Shop Now
                      </button>

                    </div>

                  </div>
                </div>


                <div className="flex items-center justify-center h-full w-full relative ">
                  <img src="./hero-3.png" alt="Hero" className="
                animate__animated
                animate__fadeInUp
                drop-shadow-3xl
                2xl:max-w-[70%] xl:max-w-[70%] 
                lg:max-w-[70%] md:max-w-[66%] 
                sm:max-w-[66%] max-w-[65%] 
                object-cover
                 min-w-[45%] max-h-[70%]
                  z-30" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 300"
                    className="animate-shape 
                    animate__animated
                animate__fadeInRight
                  w-[120%] absolute sm:top-[95px] xl:top-[-20px] lg:top-[-20px] md:top-[40px] top-[10px] right-[-50px] max-[1399px]:right-[-30px] max-[1199px]:w-[125%] max-[991px]:w-[100%] max-[991px]:top-[0px] max-[575px]:right-[0] max-[420px]:w-[110%] max-[420px]:right-[-30px]"
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


          </SwiperSlide>


        </Swiper >

      </div>

      <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 2xl:border-red-800 lg:grid-cols-2 grid-cols-1 lg:h-[170vh] md:h-[160vh] sm:h-[160vh] h-screen relative overflow-hidden'>
        <div className='h-full w-full rounded-xl lg:flex justify-center items-center relative  hidden'>
          <div className='h-[70%] 2xl:h-[52%] xl:h-[88%] lg:h-[90%] relative'>
            <img src="./category.jpg" alt="" className=' h-full rounded-3xl img-clip object-cover' />

            <img src="./top-shape.png" className='right-0 absolute 2xl:top-[69%] xl:top-[62%] xl:right-[-1px] lg:top-[61%] top-[65%]' alt="" />
            <img src="./top-shape.png" className='2xl:right-[350px] xl:right-[283px] lg:right-[235px] md:right-[54px] sm:right-[69px]  absolute bottom-0 ' alt="" />


            <span className='p-1 px-4 bg-[rgba(0,0,0,0.86)] rounded-full text-white opacity-80 absolute top-5 right-5'>
              50% off
            </span>
          </div>
        </div>

        <div className='h-full'>
          <div className='sm:h-[60%] h-[30%] flex justify-center items-center'>
            <svg width="100%" height="100%" viewBox="0 0 800 200" className="w-full group lg:h-[165vh] md:h-screen sm:h-[70vh] h-[66vh] ">
              <defs>
                <linearGradient id="light-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>

                <mask id="light-mask">
                  <rect x="0" y="0" width="800" height="200" fill="url(#light-gradient)">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      from="-800 0"
                      to="800 0"
                      dur="2s"
                      repeatCount="1"
                      fill="freeze"
                      begin="indefinite"
                    />
                  </rect>
                </mask>
              </defs>

              <text
                textAnchor="middle"
                x="50%"
                y="80"
                className="fill-white xl:text-[140px] md:text-[140px] sm:text-[140px] stroke-black stroke-[1px] font-bold transition-all duration-500"
                fontFamily="Arial"
                style={{ fontSize: "140px" }}
                id="mainText"
              >
                <tspan x="30%" dy="40">Explore</tspan>
                <tspan x="46%" dy="130">Categories</tspan>
              </text>


              <text
                textAnchor="middle"
                x="50%"
                y="80"
                className="xl:text-[140px] md:text-[140px] sm:text-[140px] font-bold pointer-events-none"
                fontFamily="Arial"
                fill="white"
                mask="url(#light-mask)"
              >
                <tspan x="30%" dy="40">Explore</tspan>
                <tspan x="46%" dy="130">Categories</tspan>
              </text>
            </svg>
          </div>
          <div className='absolute 
          xl:left-[27%] 
          xl:w-[72%]
          lg:left-[27%] 
          lg:w-[78%]
          md:left-[4%] 
          md:w-[99%]
          sm:left-[4%] left-[0%] 
          sm:w-full
          mt-7
          w-[99%]'>

            <SlickSliderComponent />
          </div>
        </div>
      </div>

      <div className="h-screen">

        {
          products.length === 0 ? ("0") :
            <>
              <div className='flex'>
                {products.map((el) => (
                  <div
                    key={el.id}
                    className="relative card w-[18rem] flex flex-col justify-between rounded-2xl  overflow-hidden shadow-md border  hover:shadow-lg transition-shadow duration-300"
                  >
                    <span className="absolute z-50 top-3 left-2 " style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>{el.tag}</span>


                    <div className="h-[240px] w-full group relative">
                      <img
                        src={el.image}
                        alt={el.name}
                        className="h-full w-full object-cover border"
                      />
                      <div className='hidden group-hover:block absolute bottom-0 right-20'><i className="fa-solid fa-heart p-2 rounded-lg shadow-md border bg-white"></i> <i className="bg-white fa-solid fa-eye p-2 rounded-lg shadow-md border" onClick={() => handleEye(el)}></i><i className="bg-white fa-solid fa-recycle p-2 rounded-lg shadow-md border"></i><i className="bg-white fa-solid fa-bag-shopping p-2 rounded-lg shadow-md border"></i></div>
                    </div>


                    <div className="p-3 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">{el.name}</h2>
                        <div className="text-yellow-500 text-sm">
                          {'★'.repeat(Math.floor(el.rating || 0))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 ">{el.des}</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-800 font-bold text-base">
                          ${el.price}
                          <strike className="text-sm text-gray-400 ms-2">${el.strike}</strike>
                        </span>
                        <span className="text-sm text-gray-500">{el.weight}</span>
                      </div>
                    </div>
                  </div>
                ))}

              </div>



            </>
        }

      </div>

      {/* offcanvas */}

      {
        open &&
        <>
<>

  <div className="fixed inset-0 bg-red-700 opacity-40 z-50"></div>

  <div className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-center overflow-auto p-4 animate-fade-in">
    
    <div className="grid sm:grid-cols-2 grid-cols-1 bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[95vh]">
      

      <div className="h-full w-full flex justify-center items-center bg-gray-50 p-4">
        <div className="h-64 w-64 sm:h-4/5 sm:w-4/5">
          <img
            src={eye.image}
            alt={eye.name}
            className="h-full w-full object-contain rounded-lg"
          />
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between overflow-y-auto max-h-[95vh]">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">{eye.des}</h1>
          <div className="text-yellow-500 text-lg mb-2">
            {'★'.repeat(Math.floor(eye.rating || 0))}
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>

        <div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-800 font-bold text-xl">
              ${eye.price}
              <strike className="text-sm text-gray-400 ml-2">${eye.strike}</strike>
            </span>
            <span className="text-sm text-gray-500">{eye.weight}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {['250g', '500g', '1kg', '2kg'].map((size) => (
              <button
                key={size}
                className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</>

</>

      }



    </>
  )
}

export default Home
