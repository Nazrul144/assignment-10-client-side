import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Root = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;