import { defineStore } from "pinia";

export const useImgStore = defineStore({
  id: "images",
  state: () => ({
    pic:["pic0","pic1", "pic2", "pic3"],
  }),
  getters: {
    getPiclist: (state) => {
      return state.pic;
    },
  },
  actions: {
  },
});
