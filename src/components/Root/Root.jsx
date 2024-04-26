import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar';

const Root = () => {
    return (
        <div className='lg:mr-8 lg:ml-8'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;