// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyAmknoC6o7WepVoKtjcfNMXidw8OgyrzuM",
    authDomain: "anuvrat-a.firebaseapp.com",
    databaseURL: "https://anuvrat-a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "anuvrat-a",
    storageBucket: "anuvrat-a.appspot.com",
    messagingSenderId: "532318765447",
    appId: "1:532318765447:web:fd3ddc177816d7ae03d322"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default database;