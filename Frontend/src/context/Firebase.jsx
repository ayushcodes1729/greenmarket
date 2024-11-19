import { createContext, useContext } from "react";
import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyCqFl6Rcp8iRLtzb479lG1_qFf9_Zg7Z9g",
    authDomain: "greenmarket-f7bfc.firebaseapp.com",
    projectId: "greenmarket-f7bfc",
    storageBucket: "greenmarket-f7bfc.firebasestorage.app",
    messagingSenderId: "913230098470",
    appId: "1:913230098470:web:d00273ade53140125af6e7",
    measurementId: "G-P5YFN4CS2G"
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firbaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(firbaseAuth, email, password);
    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}