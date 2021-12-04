import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
        apiKey: "AIzaSyADZG7x3B5dFxkt787Ps_RyR9ndiuI9Jt0",
        authDomain: "chatbox-79c82.firebaseapp.com",
        projectId: "chatbox-79c82",
        storageBucket: "chatbox-79c82.appspot.com",
        messagingSenderId: "82089811858",
        appId: "1:82089811858:web:6efbde43050307646beb4b"
}).auth();

export default auth;