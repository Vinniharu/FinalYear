import app from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const db = getFirestore(app)

const sendToFirebase = async ({ code, level, title, note }) => {
  try {
    await setDoc(doc(db, "Notes", `${code}${uuidv4()}`), {
      code,
      level,
      title,
      note,
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendToFirebase