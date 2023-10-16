import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
      apiKey: "AIzaSyA91mMsftk_mMJeVAgUFgetYfiDRxoHNt8",
      authDomain: "netflix-ec52d.firebaseapp.com",
      projectId: "netflix-ec52d",
      storageBucket: "netflix-ec52d.appspot.com",
      messagingSenderId: "735509118929",
      appId: "1:735509118929:web:ef1c8eef21d4d274242af0"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();

    export { auth };
    export default db;