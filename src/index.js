// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbJd28TNdRhy7Mllv0XiA-LUpsDJwzx1w",
  authDomain: "gettingstartedwithfireba-d1254.firebaseapp.com",
  projectId: "gettingstartedwithfireba-d1254",
  storageBucket: "gettingstartedwithfireba-d1254.appspot.com",
  messagingSenderId: "293083862241",
  appId: "1:293083862241:web:3c24ca96a3974903ac93a0",
  measurementId: "G-WX12PN2TYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);