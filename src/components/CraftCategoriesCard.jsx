import PropTypes from 'prop-types';

const CraftCategoriesCard = ({category}) => {
    const {name, image} = category;
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

CraftCategoriesCard.propTypes = {
    category: PropTypes.node
};

export default CraftCategoriesCard;