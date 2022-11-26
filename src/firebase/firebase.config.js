// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm-anLfjdPR1tpB6fNv-KNyJSaDZPx2jc",
  authDomain: "vehicles-zone.firebaseapp.com",
  projectId: "vehicles-zone",
  storageBucket: "vehicles-zone.appspot.com",
  messagingSenderId: "212134296398",
  appId: "1:212134296398:web:d34b407b36aa6d7c383c1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;