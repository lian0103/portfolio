<script setup>
import { ref, reactive } from "vue";
import { useMsgStore } from "@/stores/message";
import { useImgStore } from "@/stores/images";
import { writeMsgData } from "@/firebase/db";
import MsgVue from "@/components/Msg.vue";

const addShow = ref(false);

const state = reactive({
  errorMsg: "",
});
const imgStore = useImgStore();

const picArr = imgStore.getPiclist;
const picUrlMap = imgStore.getPicUrlMap;
const picActive = ref(picArr[0]);

const msgStore = useMsgStore();
msgStore.getMsg();

const strRegex = /(<([^>]+)>)/gi;
const handleSend = () => {
  let txtForm = document.getElementById("txtForm");
  let nameVal = txtForm.name.value;
  let msgVal = txtForm.msg.value;
  if (!nameVal || !msgVal) {
    state.errorMsg = "require name & msg";
    return false;
  }
  if (strRegex.test(nameVal) || strRegex.test(msgVal)) {
    state.errorMsg = "no tag<> in name & msg";
    return false;
  }

  writeMsgData(nameVal, msgVal, picActive.value);
  txtForm.msg.value = "";
  msgStore.getMsg();
  addShow.value = false;
};
</script>

<template>
  <div class="container p-4 pt-8 relative">
    <h1 class="fontIkea text-2xl">MESSAGE</h1>
    <button class="absolute right-2 top-2 btnCus2" @click="addShow = true">
      ADD
    </button>
    <div class="msgboxOut">
      <MsgVue
        v-for="data in msgStore.getMsglist"
        :key="data.time"
        :data="data"
      />
      <form
        id="txtForm"
        action=""
        :class="addShow ? 'block' : 'hidden'"
        class="
          w-full
          md:w-1/2
          mx-auto
          px-6
          py-6
          z-10
          absolute
          top-16
          left-0
          md:left-1/4
          bg-gray-200
          border-l-gray-400
          rounded
        "
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 fontIkea"
            for="name"
          >
            PIC
          </label>
          <div class="flex">
            <img
              :class="picActive == pic ? 'picActive' : ''"
              class="h-20 w-20 rounded-full mr-4 mb-2"
              v-for="pic in picArr"
              :key="pic"
              :src="picUrlMap[pic]"
              alt="pic"
              @click="picActive = pic"
              loading="lazy"
            />
          </div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2 fontIkea"
            for="name"
          >
            Name
          </label>
          <input
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
              border-slate-500
            "
            name="name"
            type="text"
            placeholder=""
          />
        </div>
        <div class="mb-0 relative">
          <label class="block text-gray-700 text-sm font-bold mb-2 fontIkea">
            words
          </label>
          <textarea
            class="
              shadow
              form-textarea
              mt-1
              block
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
              border
              rounded
              border-slate-500
            "
            name="msg"
            rows="5"
            placeholder=""
            maxLength="200"
          ></textarea>
          <span class="text-black-200 absolute left-0 bottom-[-22px]">{{
            state.errorMsg
          }}</span>
        </div>

        <div class="flex items-center justify-center mt-8">
          <button class="btnCus2 mr-4" @click="handleSend" type="button">
            <span>Send</span>
          </button>
          <i
            class="fas fa-times absolute top-2 right-4 text-2xl cursor-pointer"
            @click="addShow = false"
          ></i>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.msgboxOut {
  @apply flex flex-col md:flex-row md:flex-wrap overflow-y-scroll w-full;
  max-height: calc(100vh - 200px);
}

.picActive {
  outline: 2px solid #4f46e5;
}
</style>
