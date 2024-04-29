import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Card from './Card';
const AllArt = () => {
    const materials = useLoaderData()
    console.log(materials);
    return (
        <div>
            <h1>All Art{materials.length}</h1>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 h-full'>
           {
                materials.map(item => <Card key={item._id} item={item}></Card>)
            }
           </div>
        </div>
    );
};

export default AllArt;