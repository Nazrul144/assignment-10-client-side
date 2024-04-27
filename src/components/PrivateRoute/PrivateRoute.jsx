import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-md "></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;