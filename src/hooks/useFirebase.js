import { useEffect, useState } from "react";
import firbaseinitialize from "../firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup,onAuthStateChanged, signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";



firbaseinitialize();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    
    
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
           .catch(error=> {
            setError(error.message)
        })
    }
 

// email sign in & log in 
    const setRegisterEmail = e => {
        setEmail(e.target.value);
    }
    const setRegisterPassword = e => {
       setPassword(e.target.value);
    }
    const handleRegistretion = e => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
            })
          .catch(error => {
            setError(error.message)
        })
        e.preventDefault();
    }
    const loginWithEmail = e => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
            setError(error.message)
            })
        e.preventDefault();
    }



    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
        }
    })
},[])
    
    const logOut = () => {
        signOut(auth)
            .then(() => {
            setUser({})
        })
    }


    return {
        user,
        error,
        logOut,
        signInUsingGoogle,
        loginWithEmail,
        handleRegistretion,
        setRegisterEmail,
        setRegisterPassword
    }
    
}





export default useFirebase;