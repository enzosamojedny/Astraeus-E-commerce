import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// const apiKey = import.meta.env.VITE_apiKey;
// const authDomain = import.meta.env.VITE_authDomain;
// const projectId = import.meta.env.VITE_projectId;
// const storageBucket = import.meta.env.VITE_storageBucket;
// const messagingSenderId = import.meta.env.VITE_messagingSenderId;
// const appId = import.meta.env.VITE_appId;
// const measurementId = import.meta.env.VITE_measurementId;
const firebaseConfig = {
  apiKey: "AIzaSyDowIFE5yjnIdG282atqr90DAjlrhK7Wzc",
  authDomain: "astraeus-8b97b.firebaseapp.com",
  projectId: "astraeus-8b97b",
  storageBucket: "astraeus-8b97b.appspot.com",
  messagingSenderId: "455949769021",
  appId: "1:455949769021:web:1dd0a3c83e24121cd28d54",
  measurementId: "G-5B2M0J6E51",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
