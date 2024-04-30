
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
const AllArtCard = ({ item }) => {
    const { productName, price, rating, subcategory } = item;

    return (
        <div>
             <Helmet>
                <title>CraftedEcoChic | All Art&Craft</title>
            </Helmet>
            <table className='w-full bg-[#F2D2BD] rounded-lg mt-44 md:mt-4'>
                <tbody>
                    <tr>
                        <td>Product Name:</td>
                        <td>{productName}</td>
                    </tr>
                    <tr>
                        <td>Subcategory:</td>
                        <td>{subcategory}</td>
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
                <Link to={`/viewDetails/${item._id}`} className='btn btn-secondary duration-800 ease-in-out hover:bg-[tomato] hover:text-black'>View Details</Link>
            
            </div>
        </div>
    );
};
AllArtCard.propTypes = {
    item: PropTypes.node
};
export default AllArtCard;
