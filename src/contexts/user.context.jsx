import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({

    currentUser: null,
    setCurrentUser: () => null

});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser]= useState(null);
    const value = {currentUser, setCurrentUser};

    

    useEffect(() => {
       const unSubscribe = onAuthStateChangedListner((user) =>  {

        if(user){
            createUserDocumentFromAuth(user);
        }

       setCurrentUser(user);
       })

       return unSubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}