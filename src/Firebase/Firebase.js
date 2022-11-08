import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  /* apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID */
  apiKey: "AIzaSyBdELSE7z8CAyqA74G0pKf8d4Am4WLaBCY",
  authDomain: "ferreira-34770.firebaseapp.com",
  projectId: "ferreira-34770",
  storageBucket: "ferreira-34770.appspot.com",
  messagingSenderId: "833395820544",
  appId: "1:833395820544:web:df6403f17dae201eed30e5",
  measurementId: "G-NX3J5D5KJH"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);