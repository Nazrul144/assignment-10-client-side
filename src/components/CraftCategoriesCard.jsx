import PropTypes from 'prop-types';

const CraftCategoriesCard = ({category}) => {
    const {name, image} = category;
    console.log(category);
    console.log(name, image);
    return (
        <div>
            <h1>Categories</h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CraftCategoriesCard.propTypes = {
    category: PropTypes.node
};

export default CraftCategoriesCard;