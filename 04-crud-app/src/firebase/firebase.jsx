import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBp2KiIBRtOWe6l3mSm4ZpuomzQMkrDmY8",
  authDomain: "fir-practice-59cfa.firebaseapp.com",
  projectId: "fir-practice-59cfa",
  storageBucket: "fir-practice-59cfa.firebasestorage.app",
  messagingSenderId: "797658635620",
  appId: "1:797658635620:web:617caf5ba1b65c424eee71"
};

const app = initializeApp(firebaseConfig);


export const db=getFirestore(app);  

export const auth = getAuth(app);