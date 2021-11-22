import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

// Initialize Firebase
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebase;