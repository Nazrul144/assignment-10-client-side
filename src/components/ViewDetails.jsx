import { FaRegStar } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom'
const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1>View Details</h1>

            <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={data.photo} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <li><span className='text-green-500 font-bold'>Product Name: </span>{data.productName}</li>
                        <li><span className='text-green-500 font-bold'>Processing Time: </span>{data.processing_time}</li>
                        <li><span className='text-green-500 font-bold'>Price: </span>{data.price}</li>
                        {/* <li><span className='text-green-500 font-bold'>Rating: </span>{data.rating}  <FaRegStar /></li> */}
                        <li>
                            <span className='text-green-500 font-bold'>Rating: </span>
                            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                {data.rating}
                                 <FaRegStar />
                            </div>
                        </li>

                        <li><span className='text-green-500 font-bold'>Customization: </span>{data.customization}</li>
                        <li><span className='text-green-500 font-bold'>Subcategory: </span>{data.subcategory}</li>
                        <li><span className='text-green-500 font-bold'>Stock Status: </span>{data.stockStatus}</li>
                        <li><span className='text-sky-400 font-bold'>Username: </span>{data.username}</li>
                        <li><span className='text-sky-400 font-bold'>Email: </span>{data.email}</li>
                        <li><span className='text-green-500 font-bold'>Description: </span>{data.description}</li>
                        <div className=" mt-4 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">Back to home</Link>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800">Explore More</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewDetails;
