import * as firebase from "firebase";
import "firebase/auth"
import "firebase/database"

const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyATUpRvmYBWDtCX3-Vh_GVmlq6tRzV4a7c",
    authDomain: "cleveroad-6fc0f.firebaseapp.com",
    databaseURL: "https://cleveroad-6fc0f.firebaseio.com",
    projectId: "cleveroad-6fc0f",
    storageBucket: "cleveroad-6fc0f.appspot.com",
    messagingSenderId: "469832206386",
    appId: "1:469832206386:web:27e1edbf39a7414a5c542b",
    measurementId: "G-K6PEGV5LY9"
});

export default firebaseConfig