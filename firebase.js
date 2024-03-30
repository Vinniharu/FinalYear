import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc0bk8LdBPHMX_vkk4u2nt-BWPU_upStY",
  authDomain: "final-year-73c90.firebaseapp.com",
  projectId: "final-year-73c90",
  storageBucket: "final-year-73c90.appspot.com",
  messagingSenderId: "397711773637",
  appId: "1:397711773637:web:ad0ec3b9d628b7da6285ac",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const colRef = collection(db, "Notes");

const fetchDataFromFirebase = async () => {
  try {
    const snapshot = await getDocs(colRef);
    const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
    throw error;
  }
};

export default fetchDataFromFirebase;