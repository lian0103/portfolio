import { getDatabase, ref, set } from "firebase/database";
import app from "./index";

const db = getDatabase(app);

export const msgRef = ref(db, "messages");

export function writeMsgData(name, message) {
  const timeId = new Date().valueOf();
  set(ref(db, `messages/${timeId}`), {
    username: name,
    message: message,
    time: timeId,
  });
}

export default {};
