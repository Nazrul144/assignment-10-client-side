import React from 'react';

const AllArtCard = ({ item }) => {
    const { productName, price, rating } = item;

    return (
        <div>
            <table className='w-full bg-[#F2D2BD] rounded-lg'>
                <tbody>
                    <tr>
                        <td>Product Name:</td>
                        <td>{productName}</td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>{price}</td>
                    </tr>
                    <tr>
                        <td>Rating:</td>
                        <td>{rating}</td>
                    </tr>
                </tbody>
            </table>
            <div className='flex justify-between mb-12 mt-2'>
                <button className='btn btn-secondary'>View Details</button>
            
            </div>
        </div>
    );
};

export default AllArtCard;
