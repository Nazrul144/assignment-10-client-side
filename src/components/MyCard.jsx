import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const MyCard = ({ item, items, setItems }) => {
  const { productName, photo, price, rating, customization, stockStatus, _id } = item;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/material/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Item has been deleted.",
                icon: "success"
              });
              const remainingMaterial = items.filter(mat => mat._id !== _id)
              setItems(remainingMaterial)
            }
          })
      }
    });



  }
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{productName}</h2>
          <li><span className='text-red-400 font-bold'>Price:</span> {price}</li>
          <li> <span className='text-red-400 font-bold'>Rating:</span> {rating}</li>
          <li> <span className='text-red-400 font-bold'>Customization:</span> {customization}</li>
          <li> <span className='text-red-400 font-bold'>StockStatus:</span> {stockStatus}</li>
          <div className="card-actions">
      
            <Link to={`/update/${_id}`}><button className="btn btn-primary">Update</button></Link>
            {/* <Link to='/update'>Update</Link> */}
            <button onClick={() => handleDelete(_id)} className="btn btn-secondary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyCard.propTypes = {
  item: PropTypes.node
}
export default MyCard;