import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

const colRef = collection(db, "Notes");

const fetchFromFirebase = async () => {
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

export default fetchFromFirebase;
