import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDP_LNtihk9N2QEB2S1BQ6EksJ65Svqa9E",
  authDomain: "message-47a1c.firebaseapp.com",
  databaseURL:
    "https://message-47a1c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "message-47a1c",
  storageBucket: "message-47a1c.appspot.com",
  messagingSenderId: "684812001255",
  appId: "1:684812001255:web:4e2197a976924ff991a742",
  measurementId: "G-YE2TEMSHRR",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
