import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBQyqUGfepVaOusGl26tdnpLhfhtjQscUs",
	authDomain: "instablog-b76cc.firebaseapp.com",
	projectId: "instablog-b76cc",
	storageBucket: "instablog-b76cc.appspot.com",
	messagingSenderId: "55548545774",
	appId: "1:55548545774:web:25a9dc9743a8fc28fc41ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
