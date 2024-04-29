import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const { user, logOut } = useContext(AuthContext)
    const [showName, setShowName] = useState(false);

    // console.log(user?.photoURL);
    // console.log(user?.email);
    // console.log(user?.displayName);
    // console.log("User object:", user);

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


    const handleTheme = e => {
        console.log(e.target.value);
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const components = <>
        <li className='font-Roboto font-semibold'><NavLink className={({ isActive }) => isActive ? 'text-red-500 underline' : "text-black"} to='/'>Home</NavLink></li>
        <li className='font-Roboto font-semibold'><NavLink className={({ isActive }) => isActive ? 'text-red-500 underline' : " "} to='/allArt'>All Art & craft</NavLink></li>
        {
            user && <div className='lg:flex'>
                <li className='font-Roboto font-semibold'><NavLink className={({ isActive }) => isActive ? 'text-red-500 underline' : " "} to='/addCraft'>Add Craft</NavLink></li>
                <li className='font-Roboto font-semibold'><NavLink className={({ isActive }) => isActive ? 'text-red-500 underline' : " "} to='/myArt'>My Art&Craft</NavLink></li>

            </div>
        }

        <li className='font-Roboto font-semibold'><NavLink className={({ isActive }) => isActive ? 'text-red-500 underline' : " "} to='/register'>Register</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar shadow-lg">
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
                <div>
                    <label className="cursor-pointer grid place-items-center">
                        <input onClick={handleTheme} type="checkbox"
                            value="dark"
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
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
                            {/* <a onClick={handleLogOut} className="btn btn-info text-lg">Logout</a> */}
                            <button className='btn btn-secondary' onClick={handleLogOut}>Logout</button>

                        </> :
                            <Link to='/login'><button className='rounded-lg text-lg bg-slate-300 p-2 font-bold btn btn-info'>Login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;