
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
                <Link to={`/viewDetails/${item._id}`} className='btn btn-secondary'>View Details</Link>
            
            </div>
        </div>
    );
};
AllArtCard.propTypes = {
    item: PropTypes.node
};
export default AllArtCard;
