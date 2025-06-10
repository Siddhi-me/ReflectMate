
const firebaseConfig = {
  apiKey: "AIzaSyABhKz4REq8TkO6pQRBa9VCrODA-GJHm94",
  authDomain: "reflectmate-sd013.firebaseapp.com",
  projectId: "reflectmate-sd013",
  storageBucket: "reflectmate-sd013.appspot.com",
  messagingSenderId: "662216928989",
  appId: "1:662216928989:web:4515473d9e700245e93534"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
