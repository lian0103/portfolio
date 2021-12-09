import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "style",
  state: () => ({
    mode: "light",
  }),
  getters: {
    getStyleMode: (state) => state.mode,
  },
  actions: {
    swithMode(mode) {
      this.mode = mode;
    },
  },
});
