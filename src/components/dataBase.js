import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAjMKph7sFNuf4pJypqUzORpUUiV57eIbk",
  authDomain: "tinder-clone-6efcf.firebaseapp.com",
  projectId: "tinder-clone-6efcf",
  storageBucket: "tinder-clone-6efcf.appspot.com",
  messagingSenderId: "144381208803",
  appId: "1:144381208803:web:da51d188bddb8b2d7c7dd6",
  measurementId: "G-M43QKTLRQ0",
});

const dataBase = getFirestore(firebaseConfig);
// const dataBase = getAnalytics(firebaseApp);

export default dataBase;
