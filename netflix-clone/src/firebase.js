import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyChSQqbgCvWYBK4sCp0CgWFu991n4EOBD0",
    authDomain: "netflix-clone-6fc38.firebaseapp.com",
    projectId: "netflix-clone-6fc38",
    storageBucket: "netflix-clone-6fc38.appspot.com",
    messagingSenderId: "700629251379",
    appId: "1:700629251379:web:8b70e1524c707353e07a46",
    measurementId: "G-4L5P4Z1XQP"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  

  export { db, auth };