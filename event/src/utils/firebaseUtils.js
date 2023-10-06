import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA130Te1XJbqnjbiAjT79xMYzNOEvymY3w",
    authDomain: "intagleoeventapp.firebaseapp.com",
    databaseURL: "https://intagleoeventapp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "intagleoeventapp",
    storageBucket: "intagleoeventapp.appspot.com",
    messagingSenderId: "189602680780",
    appId: "1:189602680780:web:e85ccccaf19cae3c6ad769",
    measurementId: "G-X00ZE1SP98"
  };

  const app = initializeApp(firebaseConfig);
  const realtimeDatabase = getDatabase(app);
  
  export function pushDataToFirestore(data) {
    const databaseRef = ref(realtimeDatabase, "IntagleoEvents");
    const newChildRef = push(databaseRef); 
    return set(newChildRef, data)
      .then(() => {
        console.log("Data appended to Firebase Realtime Database successfully!");
      })
      .catch((error) => {
        console.error("Error appending data:", error);
      });
  }