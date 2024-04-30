import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CraftCategoriesCard = ({category}) => {
    const {name, image} = category;
    return (
        <Link to={`/subcategory/${name}`}>
            <div className="card h-full bg-base-100 shadow-xl duration-1000 ease-in-out hover:bg-orange-100 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

CraftCategoriesCard.propTypes = {
    category: PropTypes.node
};

export default CraftCategoriesCard;