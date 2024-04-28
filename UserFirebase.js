import { getDatabase, ref, set } from "firebase/database";
import app from "./firebase";

const userData = (id, email, name, admin) => {
   const db = getDatabase(app);
   set(ref(db, "users/" + id), {
     username: name,
     email: email,
     admin: admin
   });
}

export default userData