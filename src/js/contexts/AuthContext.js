// Dependencies
import React, {createContext, useContext, useState, useEffect} from 'react';
import {auth} from '../firebase';


const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] =  useState(null);

    const signup =  (email, password) => auth.createUserWithEmailAndPassword(email, password);
    const login = (email, password) => auth.signInWithEmailAndPassword(email, password);
    const logout = () => auth.signOut();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};