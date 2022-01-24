// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDjBEBBs_pFnf_0dMOkZ1jv7-vTTeEmRRE",

  authDomain: "react-rodrigo.firebaseapp.com",

  projectId: "react-rodrigo",

  storageBucket: "react-rodrigo.appspot.com",

  messagingSenderId: "458141942810",

  appId: "1:458141942810:web:7747178afe6a4fe4e07da3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)