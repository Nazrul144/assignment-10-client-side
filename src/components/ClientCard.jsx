import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';

const ClientCard = ({ person }) => {
    const { name, location, rating, image, review } = person;
    return (
        <div>
            <div className="card h-full bg-base-200 shadow-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                <div className="rounded-full overflow-hidden mx-auto mt-4" style={{ width: '120px', height: '120px' }}>
                    <img className="w-full h-full object-cover" src={image} alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">Business Man</div>
                    </h2>
                    <li>
                        <span className='text-green-500 font-bold'>Rating: </span>
                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            {rating}
                            <FaRegStar className="ml-1" />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </li>
                    <li> <span className='font-bold'>Review:</span> {review}</li>
                    <li><span className='font-bold'>Location :</span>{location}</li>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

ClientCard.propTypes = {
    person: PropTypes.object.isRequired
};

export default ClientCard;
