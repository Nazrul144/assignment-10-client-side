import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Swal from 'sweetalert2'
const UpdateMaterial = () => {
    const material = useLoaderData()
    const { productName, photo, subcategory, price, rating, processing_time, customization, stockStatus, username,email,description, _id } = material;

    const handleUpdateMaterial = (e) =>{
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

        const updatedMaterial = {productName, photo, processing_time, price, rating, customization, subcategory, stockStatus, username, email, description }

        console.log('from 19',updatedMaterial);
console.log(_id)
        //Send data to the server side:
        fetch(`http://localhost:5000/material/${_id}`, {
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(updatedMaterial)
        })
        .then(res => res.json())
        .then(data => {
            console.log("the data is here",data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: "Success!",
                    text: "Material updated successfully!",
                    icon: "success"
                  });
            }
        })
    }
    return (
        <div className='bg-[#F4F3F0] p-2 lg:p-24'>
            <h1 className='text-2xl font-bold text-center'>Update Material{productName}</h1>
        <form onSubmit={handleUpdateMaterial} >
            {/*Product name and Photo*/}
            <div className='lg:flex gap-2'>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text'>Image Name:</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" name="productName" defaultValue={productName} placeholder='Product Name' className='input input-bordered w-full' id="" />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text'>Photo URL:</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" name="photo"  defaultValue={photo}  placeholder='Photo URL' className='input input-bordered w-full' id="" />
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
                        <input type="text" name="subcategory"  defaultValue={subcategory}  placeholder='Subcategory Name' className='input input-bordered w-full' id="" />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text'>Price</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" name="price"  defaultValue={price}  placeholder='Price' className='input input-bordered w-full' id="" />
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
                        <input type="text" name="rating"  defaultValue={rating}  placeholder='Rating' className='input input-bordered w-full' id="" />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text'>Customization-Example:</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" name="customization"  defaultValue={customization}  placeholder='Customization' className='input input-bordered w-full' id="" />
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
                        <input type="text" name="processing_time"  defaultValue={processing_time}  placeholder='Processing_time' className='input input-bordered w-full' id="" />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text'>StockStatus:</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" name="stockStatus"  defaultValue={stockStatus}  placeholder='StookStatus' className='input input-bordered w-full' id="" />
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
                        <input type="text" name="username"  defaultValue={username}  placeholder='Username' className='input input-bordered w-full' id="" />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className='label'>
                        <span className='label-text'>Email:</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" name="email"  defaultValue={email}  placeholder='Email' className='input input-bordered w-full' id="" />
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
                        <input type="text" name="description"  defaultValue={description}  placeholder='Product Description' className='input input-bordered w-full mb-4' id="" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Update Craft" className='btn btn-block' />
        </form>

    </div>
    );
};

export default UpdateMaterial;