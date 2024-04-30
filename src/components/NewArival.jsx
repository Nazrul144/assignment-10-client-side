import React from 'react';
import PropTypes from 'prop-types';

const NewArival = ({newArival}) => {
    const {name, description, image, price} =  newArival;
    return (
        <div>
           
            <div className="card h-full bg-base-300 shadow-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <li className='font-bold'> <span className='text-red-400'>Price:</span> {price}</li>
                    <li className='font-bold'> <span className='text-red-400'>Description:</span> {description}</li>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewArival.propTypes = {
    newArival: PropTypes.node
};
export default NewArival;