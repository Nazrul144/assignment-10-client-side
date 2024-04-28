import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from './Card';
import CraftCategoriesCard from './CraftCategoriesCard';
const Home = () => {
    const materials = useLoaderData()
    const materialsToShow = materials.slice(0, 6)

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])


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
                        <img src="/1.jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-2xl font-bold"><div className="w-96 h-56  bg-[#b0bfd9] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                            Tremendous jute bag comfortable! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>

                    </div></SwiperSlide>
                    <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/2.jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#b0bfd9] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                            Royal sofa and beautiful! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>
                    </div></SwiperSlide>
                    <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/3.jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#b0bfd9] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                            Wooden Utensils and Kitchenware! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>
                    </div></SwiperSlide>
                    <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/4.jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#b0bfd9] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                            Jute and wooden jewellery! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>
                    </div></SwiperSlide>
                    <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/5.jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#b0bfd9] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                            Gorgeous chair for the people! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>
                    </div></SwiperSlide>
                </Swiper>
            </div>

            <div>
                <h1 className='font-bold font-Roboto text-3xl text-sky-400 text-center mt-12 mb-12'>Craft Items</h1>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    materialsToShow.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>

            <div>
                <h1 className='font-bold text-2xl mt-12 text-center mb-12'>Art & Craft Categories</h1>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    categories.map(category => <CraftCategoriesCard key={category._id}category={category}></CraftCategoriesCard>)
                }
            </div>

        </div>
    );
};

export default Home;