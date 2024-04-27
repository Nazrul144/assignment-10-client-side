import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import app from "../components/firebaseConfig/firebase.config";

 export const AuthContext = createContext(null)
 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }

    }, [] )


    const authInfo = {user, createUser, signInUser, loading, logOut}
   
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