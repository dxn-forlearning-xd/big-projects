import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBYgZr5Dl7eXmGivv7I056_oAk2hDtCS4U',
  authDomain: 'insta-clone-7b7f0.firebaseapp.com',
  projectId: 'insta-clone-7b7f0',
  storageBucket: 'insta-clone-7b7f0.firebasestorage.app',
  messagingSenderId: '882116040561',
  appId: '1:882116040561:web:399d0dd964701bbecc08d0',
  measurementId: 'G-SVWXS9K3CY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebase = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firebase, storage };
