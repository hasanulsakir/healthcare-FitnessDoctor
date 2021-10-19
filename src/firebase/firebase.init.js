import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const firbaseinitialize = () => {
    initializeApp(firebaseConfig);
};

export default firbaseinitialize;