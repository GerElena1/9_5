import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnlYgSrJ1nZOuqNgE4RJzBcv1gN4QH6Wk",
  authDomain: "mytodolist-f819b.firebaseapp.com",
  projectId: "mytodolist-f819b",
  storageBucket: "mytodolist-f819b.appspot.com",
  messagingSenderId: "110688821",
  appId: "1:110688821:web:56d86138cd8612ef8a4f7c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}