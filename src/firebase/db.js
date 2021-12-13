import { getDatabase, ref, set } from "firebase/database";
import app from "./index";

const db = getDatabase(app);

export const msgRef = ref(db, "messages");

export function writeMsgData(name, message,pic) {
  const timeId = new Date().valueOf();
  set(ref(db, `messages/${timeId}`), {
    username: name,
    message: message,
    pic:pic,
    time: timeId,
  });
}

export default {};
