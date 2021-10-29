import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
// firebase initialize 
const initAuth=()=>{
    initializeApp(firebaseConfig);
}
export default initAuth;