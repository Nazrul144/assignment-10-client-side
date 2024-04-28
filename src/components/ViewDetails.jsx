import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ViewDetails = () => {
    const { _id } = useParams();
    const [item, setItem] = useState(null);

    console.log(item)
    useEffect(() => {
        
        fetch(`http://localhost:5000/material/${_id}`)
            .then(response => response.json())
            .then(data => {
                console.log("Data is getting,", data);
                setItem(data)
            } )
            .catch(error => console.error('Error fetching item details:', error));
    }, [_id]);

    
    return (
        <div>
            <h1>View Details</h1>
            <div>
                {/* Render item details here */}
                {item && (
                    <>
                        <h2>{item.productName}</h2>
                        <p>Price: {item.price}</p>
                   
                    </>
                )}
            </div>
        </div>
    );
};

export default ViewDetails;
