import React, { createContext, useEffect, useState } from 'react';
import app from '../../../../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'




const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true)
    const [loading, setLoading] = useState(true)

    const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state changed', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const AuthInfo = {
        signInWithGoogle,
        setUser,
        user,
        logOut,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        signIn,
    }
    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;