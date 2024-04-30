import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyCard from './MyCard';
import {useLoaderData} from 'react-router-dom'

const MyArt = () => {
    const loadingMaterials = useLoaderData()
    const { user } = useContext(AuthContext)
    const [items, setItems] =  useState(loadingMaterials);

    console.log(loadingMaterials);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/myMaterial/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setItems(data);
        })
    },[])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
            {
                items.map(item => <MyCard key={item._id} item={item}
                items={items}
                setItems={setItems}
                ></MyCard>)
            }
        </div>
    );
};

export default MyArt;