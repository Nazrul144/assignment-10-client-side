import React from 'react';

const MyCard = ({item}) => {
    const { productName, photo,  price, rating, customization,stockStatus} = item;
    return (
        <div>
                <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{productName}</h2>
                    <li>Price: {price}</li>
                    <li>Rating: {rating}</li>
                    <li>Customization: {customization}</li>
                    <li>StockStatus: {stockStatus}</li>
                    <div className="card-actions">
                        <button className="btn btn-primary">Update</button>
                        <button className="btn btn-secondary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCard;