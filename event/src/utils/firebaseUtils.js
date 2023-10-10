import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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
const firestoreDatabase = getFirestore(app);

export async function pushDataToFirestore(data) {
  try {
    const parsedData = processAndFilterData(data);
    const collectionRef = collection(firestoreDatabase, "IntagleoEvents");
    const docRef = await addDoc(collectionRef, { data: parsedData });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

function processAndFilterData(data) {
  const processedData = {};

  for (const key in data) {
    const jsonString = data[key];
    if (jsonString) {
      if (
        key === "industry" ||
        key === "appCategory" ||
        key === "userProfile" ||
        key === "totalManDays"
      ) {
        try {
          const parsedValue = JSON.parse(jsonString);
          processedData[key] = parsedValue;
        } catch (error) {
          processedData[key] = jsonString;
        }
      } else {
        const filteredData = parseAndFilter(jsonString);
        if (Object.keys(filteredData).length > 0) {
          processedData[key] = filteredData;
        }
      }
    }
  }

  const timestamp = new Date().toISOString();
  processedData[timestamp] = { ...processedData };
  delete processedData.timestamp;

  return processedData;
}


function parseAndFilter(jsonString) {
  try {
    const parsedData = JSON.parse(jsonString);
    const filteredData = Object.entries(parsedData)
      .filter(([key, value]) => value === true)
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
    return filteredData;
  } catch (error) {
    return {};
  }
}