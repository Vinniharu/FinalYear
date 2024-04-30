import { getDatabase, ref, set } from "firebase/database";

const writeUserData = (userId, admin) => {
  const db = getDatabase();
  set(ref(db, "users/" + userId), admin);
}

export default writeUserData
