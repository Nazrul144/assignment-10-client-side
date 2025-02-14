import { useContext } from 'react';
import Swal from 'sweetalert2'
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const AddCraft = () => {

    const { user } = useContext(AuthContext)

    console.log(user);

    const handleAddCarft = (e) =>{
        e.preventDefault();
        const productName = e.target.productName.value;
        const photo = e.target.photo.value;
        const price = e.target.price.value;
        const subcategory = e.target.subcategory.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const username = e.target.username.value;
        const processing_time = e.target.processing_time.value;
        const email = e.target.email.value;
        const description = e.target.description.value;
        const stockStatus = e.target.stockStatus.value;

        const newMaterial = {productName, photo, processing_time, price, rating, customization, subcategory, stockStatus, username, email, description }

        console.log('from 19',newMaterial);

        //Send data to the server side:
        fetch('http://localhost:5000/material', {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(newMaterial)
        })
        .then(res => res.json())
        .then(data => {
            console.log("the data is here",data)
            if(data.insertedId){
                Swal.fire({
                    title: "Success!",
                    text: "Material added successfully!",
                    icon: "success"
                  });
            }
        })
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }

    return (
        <div className='p-2 lg:p-24 mt-36 md:mt-4 lg:mt-2'>
            <Helmet>
                <title>CraftedEcoChic | Add Craft</title>
            </Helmet>
            <div className='text-center'>
                <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}>
                        <Typewriter
                            words={['Add Your Craft']}
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
       
            <form onSubmit={handleAddCarft}>
                {/*Product name and Photo*/}
                <div className='lg:flex gap-2'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Image Name:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="productName" placeholder='Product Name' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Photo URL: </span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="photo" placeholder='Photo URL' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                {/*Product Price and Quantity*/}
                <div className='lg:flex gap-2'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Subcategory_Name:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="subcategory" placeholder='Subcategory Name' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Price</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="price" placeholder='Price' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                {/*Delivery Type and Material*/}
                <div className='lg:flex gap-2'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Rating:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="rating" placeholder='Rating' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Customization-Example:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="customization" placeholder='Customization' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                {/*Delivery Type and Material*/}
                <div className='lg:flex gap-2'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Processing_time:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="processing_time" placeholder='Processing_time' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>StockStatus:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="stockStatus" placeholder='StookStatus' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                {/* Username and Email*/}
                <div className='lg:flex gap-2'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Username:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="username" placeholder='Username' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Email:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="email" defaultValue={user.email} placeholder='Email' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                {/*Product name and Photo*/}
                <div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Short Description:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="description" placeholder='Product Description' className='input input-bordered w-full mb-4' id="" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Craft" className='btn btn-block' />
            </form>

        </div>
    );
};

export default AddCraft;