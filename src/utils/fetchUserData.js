import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const fetchUserData = async (id, setter) => {
  const docRef = doc(db, "users", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setter(docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export default fetchUserData;
