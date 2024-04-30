import { getDatabase, ref, child, get } from "firebase/database";

const fetchUserData = (userId) => {

   const dbRef = ref(getDatabase());
   get(child(dbRef, `users/${userId}`))
     .then((snapshot) => {
       if (snapshot.exists()) {
         localStorage.setItem("userData", JSON.stringify(snapshot.val()));
         console.log(JSON.parse(localStorage.getItem("userData")));
       } else {
         console.log("No data available");
       }
     })
     .catch((error) => {
       console.error(error);
     });
}

export default fetchUserData