import { initializeApp } from "firebase/app";

const initializeFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAiQ046zsZ5279CThGFmlv01PIltYsRC4g",
        authDomain: "ajker-barta-97362.firebaseapp.com",
        projectId: "ajker-barta-97362",
        storageBucket: "ajker-barta-97362.appspot.com",
        messagingSenderId: "766920495092",
        appId: "1:766920495092:web:3236e927bac14e065f33a1"
    };


    initializeApp(firebaseConfig);
}

export default initializeFirebase;