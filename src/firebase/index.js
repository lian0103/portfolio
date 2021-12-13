import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDP_LNtihk9N2QEB2S1BQ6EksJ65Svqa9E",
  authDomain: "message-47a1c.firebaseapp.com",
  databaseURL:
    "https://message-47a1c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "message-47a1c",
  storageBucket: "message-47a1c.appspot.com",
  messagingSenderId: "684812001255",
  appId: "1:684812001255:web:4e2197a976924ff991a742",
};

const app = initializeApp(firebaseConfig);

export default app;