import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
    const [showName, setShowName] = useState(false);
    console.log("Login from eight", user);

    console.log(user?.photoURL);
    console.log(user?.email);
    console.log(user?.displayName);
    console.log("User object:", user);

    //Handle logOut:
    const handleLogOut = () => {
        logOut()
            .then(result => {
                Swal.fire({
                    title: "Successfully Logged out!",
                    text: "You clicked the button!",
                    icon: "success"
                });

            })
            .catch(error => {
                console.log(error)
            })
    }

    const components = <>
    <li className='font-Roboto font-semibold'><NavLink className={({isActive})=> isActive? 'text-red-500 underline' : "text-black"} to='/'>Home</NavLink></li>
    <li className='font-Roboto font-semibold'><NavLink className={({isActive})=> isActive? 'text-red-500 underline' : " "} to='/allArt'>All Art & craft Items</NavLink></li>
    <li className='font-Roboto font-semibold'><NavLink className={({isActive})=> isActive? 'text-red-500 underline' : " "} to='/addCraft'>Add Craft Item</NavLink></li>
    <li className='font-Roboto font-semibold'><NavLink className={({isActive})=> isActive? 'text-red-500 underline' : " "} to='/myArt'>My Art&Craft List</NavLink></li>
    <li className='font-Roboto font-semibold '><NavLink className={({isActive})=> isActive? 'text-red-500 underline' : " "} to='/login'>Login</NavLink></li>
    <li className='font-Roboto font-semibold'><NavLink className={({isActive})=> isActive? 'text-red-500 underline' : " "} to='/register'>Register</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {components}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold text-pink-500 font-Roboto">Artify</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {components}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user ? <>

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" onMouseEnter={() => setShowName(true)}
                                onMouseLeave={() => setShowName(false)}>
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                            {showName && <span className="tooltip tooltip-open tooltip-bottom" data-tip={user?.displayName} ></span>}
                            {/* <span className='hidden lg:inline' >{user?.email}</span> */}
                            <a onClick={handleLogOut} className="btn btn-info font-bold text-lg">Logout</a>

                        </> :
                            <Link to='/login'><button className='rounded-lg text-lg bg-slate-300 p-2 font-bold btn btn-info'>Login</button></Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;