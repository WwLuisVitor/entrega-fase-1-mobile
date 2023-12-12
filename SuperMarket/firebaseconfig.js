// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUYMPcmHlroEQjtY1lE1D0GBijJ101sdY",
    authDomain: "supermarket-iot.firebaseapp.com",
    projectId: "supermarket-iot",
    storageBucket: "supermarket-iot.appspot.com",
    messagingSenderId: "480143890141",
    appId: "1:480143890141:web:a8159887f02f6d88fcad34"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

export default App