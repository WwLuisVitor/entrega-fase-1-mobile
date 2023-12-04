import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB54JDpXp_JvAcybPIydzB-2Jrf7MuIoQ0",
  authDomain: "supermarketmobile-6d5ff.firebaseapp.com",
  projectId: "supermarketmobile-6d5ff",
  storageBucket: "supermarketmobile-6d5ff.appspot.com",
  messagingSenderId: "877930207353",
  appId: "1:877930207353:web:ce3f2e70ea9f7d8f3a1ca8",
  measurementId: "G-5CS5780LN0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;