import React from 'react';
import PropTypes from 'prop-types';
const SubCard = ({singleData}) => {
    const {photo, name, rating, price, processing_time, stockStatus} = singleData;
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <li> <span className='font-bold'>Rating: </span>{rating}</li>
                    <li> <span className='font-bold'>Price: </span>{price}</li>
                    <li> <span className='font-bold'>Processing Time: </span>{processing_time}</li>
                    <li> <span className='font-bold'>Stock Status: </span>{stockStatus}</li>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SubCard.propTypes = {
    singleData: PropTypes.node
};

export default SubCard;