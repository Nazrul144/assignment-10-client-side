
import { FaEye, FaEyeSlash, FaImages, FaUserEdit } from 'react-icons/fa';
import { IoKey, IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Typewriter } from 'react-simple-typewriter'
import { useContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';
import app from './firebaseConfig/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [errorPassword, setErrorPassword] = useState('')
    const { createUser } = useContext(AuthContext)


    const auth = getAuth(app);


    //Register form:
    const handleRegister = e => {
        e.preventDefault()
        const username = e.target.username.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("print from register page", username, photo, email, password);

        //Reset the stat:
        setErrorPassword('')

        //Validation Check:
        if (password.length < 6) {
            setErrorPassword('Password Should be at least 6 characters or more!')
            return
        }
        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            setErrorPassword('Make a strong password with both Uppercase and Lowercase letters');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)

            })


        //Creating user:
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log('user from user in 70  number line', user)
                Swal.fire({
                    title: "User Created Successfully!",
                    text: "You clicked the button!",
                    icon: "success"
                });


                //Update profile:
                updateProfile(result.user, {
                    displayName: username,
                    photoURL: photo

                })
                    .then(() => console.log('Profile Updated!'))
                    .catch(error => {
                        console.log(error)
                    })


            })
            .catch(error => {
                console.error(error)
            })





    }




    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    //Google authentication:
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    //Github authentication:
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }


//TypeWriter:
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }


    return (
        <div>
           <Helmet>
                <title>CraftedEcoChic | Register</title>
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 mt-44 mb-20 lg:mt-8 mx-auto shadow-xl">
                <div className='text-center'>
                    <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
                  
                        <span style={{ color: 'red', fontWeight: 'bold' , fontSize: '24px'}}>
                         
                            <Typewriter
                                words={['Register Now!']}
                                loop={50}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}

                            />
                        </span>
                    </h1>
                </div>


                <form data-aos-easing="zoom-in" data-aos-duration='2000' onSubmit={handleRegister} noValidate="" action="" className="space-y-6  animate__animated animate__zoomIn">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                        <div className='relative'>
                            <input type="text" name="username" placeholder="Username" required className="w-full px-8 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 border-gray-800" />
                            <div className='absolute top-4 left-2'>
                                <FaUserEdit className='text-xl' />
                            </div>
                        </div>
                        <label htmlFor="url" className="block dark:text-gray-600">Photo URL</label>
                        <div className='relative'>
                            <input type="text" name="photo" placeholder="Photo URL" required className="w-full px-8 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 border-gray-800" />
                            <div className='absolute top-4 left-2'>
                                <FaImages className='text-xl' />
                            </div>
                        </div>

                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <div className='relative'>
                            <input type="email" name="email" placeholder="Email" required className="w-full px-8 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 border-gray-800" />
                            <div className='absolute top-4 left-2'>
                                <IoMail className='text-xl' />
                            </div>
                        </div>

                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600"> Password</label>

                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder=" Choose Password"
                                required
                                className="w-full px-8 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 border-gray-800" />
                            <div className='absolute top-4 right-3'>

                                <span onClick={() => setShowPassword(!showPassword)}>

                                    {showPassword ? <FaEyeSlash className='text-xl' /> : <FaEye className='text-xl' />}
                                </span>

                            </div>
                            <div className='absolute top-4 left-2'>
                                <IoKey className='text-xl' />
                            </div>
                        </div>

                    </div>
                    <div className='text-red-500 font-bold'>
                        {errorPassword}
                    </div>
                    <button className="block w-full p-3 text-center dark:text-gray-50 dark:bg-violet-600 font-bold rounded-lg btn btn-secondary">Register</button>
                </form>
                <div className="errorDiv">
                    {/* {
                            registerError && <p className='text-red-600 font-semibold text-xl'>{registerError}</p>
                        }
                        {
                            success && <p className='text-green-500 font-semibold text-xl'>{success}</p>
                        } */}
                </div>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                        </svg>
                    </button>
                    <button onClick={handleGithubSignIn} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                    </button>

                </div>

                <p className="text-xl text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to='/login' rel="noopener noreferrer" href="#" className="underline dark:text-gray-800 font-bold text-blue-600"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;