<script setup>
import moment from "moment";
import { useImgStore } from "@/stores/images";
const props = defineProps({
  data: Object,
});

const data = props.data;
const msg = data.message;
const time = moment(data.time).calendar();
const username = data.username;
const pic = data.pic || "dopee";
const imgStore = useImgStore();
const picUrlMap = imgStore.getPicUrlMap;
</script>

<template>
  <div class="msgBox">
    <div class="inner">
      <img :src="picUrlMap[pic]" class="headImg" alt="" loading="lazy" />
      <div class="flex flex-col w-full">
        <div class="flex flex-row justify-between">
          <p
            class="relative text-xl whitespace-nowrap truncate overflow-hidden"
          >
            {{ username }}
          </p>
        </div>
        <p class="text-gray-400 text-sm">{{ time }}</p>
      </div>
    </div>
    <div class="msgTxt">{{ msg }}</div>
  </div>
</template>

<style lang="scss" scoped>
.msgBox {
  @apply w-full relative grid grid-cols-1 gap-4 p-4 my-8 md:m-4 border rounded-lg bg-white shadow-lg;
  @media screen and (min-width: 768px) {
    width: 45%;
  }
  .inner {
    @apply relative flex gap-4;

    .headImg {
      @apply relative rounded-full -top-8 -mb-4 bg-white border h-20 w-20;
    }
  }
  .msgTxt {
    @apply -mt-4 text-gray-500;
    word-break: break-all;
    height:60px;
    overflow-y: scroll;
  }
}
</style>
