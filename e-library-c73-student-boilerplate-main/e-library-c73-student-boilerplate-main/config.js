import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB5pTWA7KAAtjs2K_5Jc10Zzo31_ypQABs",
  authDomain: "elibrary-d188e.firebaseapp.com",
  projectId: "elibrary-d188e",
  storageBucket: "elibrary-d188e.appspot.com",
  messagingSenderId: "648220255104",
  appId: "1:648220255104:web:22b3f211009edc2b9f9765"

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
