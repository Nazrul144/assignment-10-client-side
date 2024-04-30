import { useContext, useEffect, useState,  } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from './Card';
import CraftCategoriesCard from './CraftCategoriesCard';
import { AuthContext } from '../Provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';
import ClientCard from './ClientCard';
import Marquee from "react-fast-marquee";
import NewArival from './NewArival';
import { Helmet } from 'react-helmet-async';


const Home = ({ children }) => {
    const { loading } = useContext(AuthContext)
    const materials = useLoaderData()
    const materialsToShow = materials.slice(0, 6)

    const [reviewsData, setReviewsData] = useState([])
    const [newArivals, setNewArivals] = useState([])

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    useEffect(()=>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => {
            setReviewsData(data);
        })
    },[])

    useEffect(()=>{
        fetch('newArival.json')
        .then(res => res.json())
        .then(data => {
           setNewArivals(data)
        })
    },[])


    if (loading) {
        return <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-md "></span>
        </div>
    }

    //TypeWriter:
    const handleDone = () => {
        console.log(`Done after 15 loops!`)
    }
    return (

        <div>
              <Helmet>
                <title>CraftedEcoChic | Home</title>
            </Helmet>

            <div className='w-full h-screen mt-44 md:mt-0'>

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
                    <SwiperSlide> <div className="flex justify-center items-center bg-no-repeat bg-cover relative ">
                        <img src="/1.jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-2xl font-bold"><div className="w-44 h-24 lg:w-96 lg:h-56 bg-[#b0bfd9] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="lg:p-6 lg:ml-4">
                            Tremendous jute bag comfortable! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary lg:mt-3 lg:text-xl lg:font-bold hover:bg-[tomato] duration-1000 ease-in-out hover:text-black border-none">Contact us</button></Link>
                        </p></div></h1>

                    </div></SwiperSlide>
                    <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/2.jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl font-bold"><div className=" w-44 h-24 lg:w-96 lg:h-56  bg-[#b0bfd9] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="lg:p-6 lg:ml-4">
                            Royal sofa and beautiful! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary lg:mt-3 lg:text-xl lg:font-bold hover:bg-[tomato] duration-1000 ease-in-out hover:text-black border-none">Contact us</button></Link>
                        </p></div></h1>
                    </div></SwiperSlide>
                    <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/3.jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl font-bold"><div className="w-44 h-24 lg:w-96 lg:h-56   bg-[#b0bfd9] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="lg:p-6 lg:ml-4">
                            Wooden Utensils and Kitchenware! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary lg:mt-3 lg:text-xl lg:font-bold hover:bg-[tomato] duration-1000 ease-in-out hover:text-black border-none">Contact us</button></Link>
                        </p></div></h1>
                    </div></SwiperSlide>
                    <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/4.jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl font-bold"><div className="w-44 h-24 lg:w-96 lg:h-56  bg-[#b0bfd9] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="lg:p-6 lg:ml-4">
                            Jute and wooden jewellery! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary lg:mt-3 lg:text-xl lg:font-bold hover:bg-[tomato] duration-1000 ease-in-out hover:text-black border-none">Contact us</button></Link>
                        </p></div></h1>
                    </div></SwiperSlide>
                    <SwiperSlide>  <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src="/5.jpg" alt="" className="w-full h-auto" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-3xl font-bold"><div className="w-44 h-24 lg:w-96 lg:h-56 bg-[#b0bfd9] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="lg:p-6 lg:ml-4">
                            Gorgeous chair for the people! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary lg:mt-3 lg:text-xl lg:font-bold hover:bg-[tomato] duration-1000 ease-in-out hover:text-black border-none">Contact us</button></Link>
                        </p></div></h1>
                    </div></SwiperSlide>
                </Swiper>
            </div>

            <div className='text-center'>
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}>
                        <Typewriter
                            words={['Craft Items']}
                            loop={40}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}

                        />
                    </span>
                </h1>
            </div>

            <Fade cascade damping={0.1}>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16'>
                {
                    materialsToShow.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
            </Fade>
            
            {/* TypeWriter */}
            <div className='text-center'>
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}>
                        <Typewriter
                            words={['Art & Craft Categories']}
                            loop={40}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}

                        />
                    </span>
                </h1>
            </div>
            <Fade cascade damping={0.1}>
                <div className='grid md:grid-cols-2 mt-16 lg:grid-cols-3 gap-4 mb-12'>
                    {
                        categories.map(category => <CraftCategoriesCard key={category._id} category={category}></CraftCategoriesCard>)
                    }
                </div>
            </Fade>

            <div className='extra section client review'>
            <div className='text-center'>
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '28px' }}>
                        <Typewriter
                            words={['Our top 9 client review']}
                            loop={40}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}

                        />
                    </span>
                </h1>
            </div>

            <Marquee className='text-4xl text-blue-400 font-bold' pauseOnHover={true}>
                We export our product in all over the world. Explore our exquisite collections, indulge in opulent amenities, and experience the epitome of refined living. Welcome to a world of splendor.
            </Marquee>
                     
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16'>
                            {
                                reviewsData.map(person => <ClientCard key={person.id} person={person}></ClientCard>)
                            }
                        </div>


                            <div className='new arival'>
                            <div className='text-center'>
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '28px' }}>
                        <Typewriter
                            words={['New Arival']}
                            loop={40}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}

                        />
                    </span>
                </h1>
            </div>
            <Marquee className='text-4xl text-orange font-bold' pauseOnHover={true}>
               New Arival New Product. Very exciting item for home decor and enjoy. Very eco-friendly and commercial. Available for all over the world!
            </Marquee>
                                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-20'>
                                    {
                                        newArivals.map(newArival => <NewArival key={newArival.id} newArival={newArival}></NewArival>)
                                    }
                                </div>
                            </div>


        </div>
    );
};

export default Home;