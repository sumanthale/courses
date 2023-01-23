import {
  arrayUnion,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import uniqid from "uniqid";

export const deleteCourse = async (courseID) => {
  try {
    await deleteDoc(doc(db, "courses", courseID));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const appendImage = async (URL) => {
  const genratedID = uniqid();

  const imageRef = doc(db, "images", genratedID);
  await setDoc(imageRef, {
    url: URL,
    id: genratedID,
    selected: false,
  });
};

const deleteImage = async (URL) => {};
