import firebase from 'firebase/app';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBs7kkwx6ks59CD_vmCS-IvzdBYy3iwPSE",
    authDomain: "design-alley.firebaseapp.com",
    projectId: "design-alley",
    storageBucket: "design-alley.appspot.com",
    messagingSenderId: "38008044211",
    appId: "1:38008044211:web:e4e4c0b6149cf8b111cec6",
    measurementId: "G-HPD9T9BHM9"
}
firebase.initializeApp(config);
export default firebase