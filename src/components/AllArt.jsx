import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Card from './Card';
import AllArtCard from './AllArtCard';
const AllArt = () => {
    const materials = useLoaderData()
    console.log(materials);
    return (
        <div>
           <div>
           {
                materials.map(item => <AllArtCard key={item._id} item={item}></AllArtCard>)
            }
           </div>
        </div>
    );
};

export default AllArt;