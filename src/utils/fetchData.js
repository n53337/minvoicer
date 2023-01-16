import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

// * Fetch User Profile

export const fetchUserProfile = async (id, setter) => {
  const docRef = doc(db, "users", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setter(docSnap.data());
  } else {
    console.log("No such document!");
  }
};

// * Fetch Invoices

export const fetchInvoices = async (id, setter) => {
  const docsSnap = await getDocs(collection(db, `users/${id}/invoices`));
  const invoices = [];
  docsSnap.forEach((doc) => {
    if (doc.exists()) {
      invoices.push(doc.data());
    } else {
      console.log("No such document!");
    }
  });

  setter(invoices);
};
