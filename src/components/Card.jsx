
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    const { productName, photo,  price, _id } = item;
   
    const handleDetails = (_id) =>{
        fetch(`http://localhost:5000/material/${_id}`, {
            method:'GET', 
            headers:{
                'content-type':'application-json'
            },
            body:JSON.stringify()
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{productName}</h2>
                    <p>Price: {price}</p>
                    <div className="card-actions">
                        <Link to={'/viewDetails'} ><button onClick={()=> handleDetails(_id)} className="btn btn-primary">View Details</button></Link>
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
