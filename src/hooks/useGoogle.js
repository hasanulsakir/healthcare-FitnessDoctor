import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth"
import { useState } from "react";

const useGoogle = () => {
    const [user, setUser] = useState([]);
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUser(result.user)
        })
    }
    return {
        user,
        signInUsingGoogle
    }

}



export default useGoogle;