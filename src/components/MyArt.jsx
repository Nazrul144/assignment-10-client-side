import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyCard from './MyCard';
import {useLoaderData} from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
const MyArt = () => {
    const loadingMaterials = useLoaderData()
    const { user } = useContext(AuthContext)
    const [items, setItems] =  useState(loadingMaterials);


    useEffect(()=>{
        fetch(`http://localhost:5000/myMaterial/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setItems(data);
        })
    },[user?.email])
    return (
        <div >
              <div className='text-center'>
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}>
                        <Typewriter
                            words={['Your favorite']}
                            loop={40}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span>
                </h1>
            </div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
           {
                items.map(item => <MyCard key={item._id} item={item}
                items={items}
                setItems={setItems}
                ></MyCard>)
            }
           </div>
        </div>
    );
};

export default MyArt;