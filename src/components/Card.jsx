
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Card = ({ item }) => {

    const { productName, photo,  price } = item;
    
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{productName}</h2>
                    <p>Price: {price}</p>
                    <div className="card-actions">
                        <Link to={`/viewDetails/${item._id}`} ><button className="btn btn-primary hover:bg-[tomato] duration-1000 ease-in-out hover:text-black border-none">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    item: PropTypes.node
};

export default Card;
