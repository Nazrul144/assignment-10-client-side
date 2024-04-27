import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Home = () => {
    const materials = useLoaderData()
    return (
        <div>
            <h1>This is home page</h1>
            <p>{materials.length}</p>

           <div className='w-full h-screen'>
            
           <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                loop={true}

            >
                <SwiperSlide> <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/pumpking-soup-salad.jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Very expensive house and eco-friendly! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>
                    
                </div></SwiperSlide>
                <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/wood1.jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Royal house for the people! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>
                </div></SwiperSlide>
                <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                    <img src="/public/jute2.jpg" alt="" className="w-full h-auto" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                    Royal house for the people! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>
                </div></SwiperSlide>
            </Swiper>
           </div>
           
        </div>
    );
};

export default Home;