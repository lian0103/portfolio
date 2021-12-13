import { defineStore } from "pinia";
import { getFirebaseImgUrl } from "@/firebase/storage";

export const useImgStore = defineStore({
  id: "images",
  state: () => ({
    pics: ["pic0", "pic1", "pic2", "pic3"],
    picsUrlMap:{
      "pic0":"https://i.imgur.com/VvmhV4K.jpg", 
      "pic1":"https://i.imgur.com/wpPgsVe.jpg", 
      "pic2":"https://i.imgur.com/6mb76wG.jpg", 
      "pic3":"https://i.imgur.com/qHpkPUr.jpg"
    }
  }),
  getters: {
    getPiclist: (state) => {
      return state.pics;
    },
    getPicUrlMap: (state) => {
      return state.picsUrlMap;
    },
  },
  actions: {
  },
});
