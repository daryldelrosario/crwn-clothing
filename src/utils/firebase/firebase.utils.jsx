import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC15S0ST8z74mF4jhw1TbTTswsOlHiyzPI",
  authDomain: "crwn-clothing-db-94786.firebaseapp.com",
  projectId: "crwn-clothing-db-94786",
  storageBucket: "crwn-clothing-db-94786.firebasestorage.app",
  messagingSenderId: "79084030940",
  appId: "1:79084030940:web:f6a180b9b717beeb609d19"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);