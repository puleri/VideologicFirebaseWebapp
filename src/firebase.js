import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { } from 'firebase/storage';
import { } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDDheRORFDJA1WGMbya4MmyQaWiwlNUsNA",
  authDomain: "videologicwebapp.firebaseapp.com",
  projectId: "videologicwebapp",
  storageBucket: "videologicwebapp.appspot.com",
  messagingSenderId: "368921035853",
  appId: "1:368921035853:web:0211c21a7c3ba8ebdcc804",
  measurementId: "G-FQJ5HQN91C"
})

export const auth = getAuth()

export default firebaseApp
