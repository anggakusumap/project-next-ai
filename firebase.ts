import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhQtHgkrMYD0TRmMqqCUW4-b8MkG1G9rw",
  authDomain: "nyolai.firebaseapp.com",
  projectId: "nyolai",
  storageBucket: "nyolai.appspot.com",
  messagingSenderId: "578372776564",
  appId: "1:578372776564:web:5bf64d7c7a9d4390be5721",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
