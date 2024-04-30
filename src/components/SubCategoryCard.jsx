import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import SubCard from './SubCard';
const SubCategoryCard = () => {
    const { name } = useParams();
    const [data , setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/material/filter?search=${name}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [name])
    return (
        <div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
           {
                data.map(singleData => <SubCard key={singleData} singleData={singleData}></SubCard> )
            }
           </div>
        </div>
    );
};

export default SubCategoryCard;