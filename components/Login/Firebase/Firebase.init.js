import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.config';

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;