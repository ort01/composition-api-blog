import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDr2eVqQw0_4ex6vRZhzJHS3zrjJeVi0yw",
    authDomain: "udemy-vue-firebase-cours-1af1e.firebaseapp.com",
    projectId: "udemy-vue-firebase-cours-1af1e",
    storageBucket: "udemy-vue-firebase-cours-1af1e.appspot.com",
    messagingSenderId: "811828952469",
    appId: "1:811828952469:web:56ec46b74500c2c3518a9c"
};

//init fireBASE
firebase.initializeApp(firebaseConfig)

//init fireSTORE service
const projectFirestore = firebase.firestore()

export { projectFirestore }