import { defineStore } from "pinia";
import { onValue } from "firebase/database";
import { msgRef } from "@/firebase/index";

export const useMsgStore = defineStore({
  id: "message",
  state: () => ({
    list: [],
  }),
  getters: {
    getMsglist: (state) => {
      return state.list;
    },
  },
  actions: {
    getMsg() {
      onValue(msgRef, (snapshot) => {
        const data = snapshot.val() || {};
        let arr = Object.keys(data).map((key) => data[key]);
        this.list = [...arr].reverse();
      });
    },
  },
});
