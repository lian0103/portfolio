import { getStorage, ref , getDownloadURL } from "firebase/storage";
import app from "./index";

const storage = getStorage(app);

export function getFirebaseImgUrl(name = "dopee.jpg") {
  const pathReference = ref(storage, `images/${name}`);
  return getDownloadURL(pathReference);
}


export default {};
