import { getStorage, ref, getMetadata } from "firebase/storage";
import app from "./index";

const storage = getStorage(app);
export function getFirebaseImg(name = "dopee.jpg") {
  const imagesRef = ref(storage, `images/${name}`);

  return getMetadata(imagesRef);
}

export default {};
