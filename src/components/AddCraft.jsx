import React from 'react';

const AddCraft = () => {

    const handleAddCarft = (e) =>{
        e.preventDefault();
        const productName = e.target.productName.value;
        const photo = e.target.photo.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const delivery = e.target.delivery.value;
        const material = e.target.material.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const description = e.target.description.value;

        const newData = {productName, photo, price, quantity, username, material, delivery, email, description }

        console.log('from 19',newData);


    }

    return (
        <div className='bg-[#F4F3F0] p-2 lg:p-24'>
            <h1 className='text-center font-bold text-2xl'>Add Your Craft</h1>
       
            <form onSubmit={handleAddCarft}>
                {/*Product name and Photo*/}
                <div className='lg:flex gap-2'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Product Name:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="productName" placeholder='Product Name' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Photo URL:</span>
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
                            <span className='label-text'>Product Price:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="price" placeholder='Product Price' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Quantity:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="quantity" placeholder='Quantity' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                {/*Delivery Type and Material*/}
                <div className='lg:flex gap-2'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Delivery Type:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="delivery" placeholder='Delivery Type' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Material:</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="material" placeholder='Location' className='input input-bordered w-full' id="" />
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
                            <input type="text" name="email" placeholder='Email' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                {/*Product name and Photo*/}
                <div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Description:</span>
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