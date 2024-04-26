import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../firebaseProvider/firebase.config";

 export const AuthContext = createContext(null)
 
const AuthProvider = ({children}) => {
    const [houses, setHouses] = useState([]);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('houseData.json')
        .then(res => res.json())
        .then(data => setHouses(data));
    },[])

    const auth = getAuth(app);

    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }


    
    useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('Observing current user', currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }

    }, [] )


    const authInfo = {houses, user, createUser, signInUser, loading, logOut}
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node
}