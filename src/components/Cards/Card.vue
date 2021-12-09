<script setup>
const props = defineProps({
  data: Object,
});

const cardData = props.data || {};
const imgURL = cardData.imgName || "https://i.imgur.com/XQ9AXFV.jpg";
const {
  title = "",
  dsc = "",
  feats = [],
  repo = null,
  onlineDemo = null,
} = cardData;
</script>

<template>
  <div class="card">
    <div class="cardInner" style="backdrop-filter: blur(20px)">
      <div class="max-w-md mx-auto">
        <div>
          <img :src="imgURL" class="w-full h-32 object-cover" />
        </div>
        <div class="divide-y divide-gray-200">
          <div
            class="
              py-8
              text-base
              leading-6
              space-y-4
              text-gray-700
              sm:text-lg sm:leading-7
              h-64
              md:h-80
              overflow-y-hidden
            "
          >
            <p class="fontIkea text-2xl">{{ title }}</p>
            <ul class="list-disc space-y-2">
              <li
                class="flex items-start"
                v-for="(feat, fIdx) in feats"
                :key="fIdx"
              >
                <span class="h-6 flex items-center sm:h-7">
                  <i class="fas fa-check checkIcon"></i>
                </span>
                <p class="ml-2">
                  {{ feat }}
                </p>
              </li>
            </ul>
            <p class="text-base">{{ dsc }}</p>
          </div>
          <div
            class="pt-2 text-base leading-6 font-bold sm:text-lg sm:leading-7"
          >
            <p>
              <a
                v-if="onlineDemo"
                class="font-bold text-blue-700 text-base"
                :href="onlineDemo"
                target="_blank"
              >
                Online Demo
              </a>
              <a
                v-if="!onlineDemo"
                class="font-bold text-gray-200 text-base cursor-not-allowed"
                :href="onlineDemo"
                target="_blank"
              >
                Online Demo
              </a>
            </p>
            <p>
              <a
                v-if="repo"
                :href="repo"
                class="text-cyan-600 hover:text-cyan-700 text-base"
              >
                Github Repo &rarr;
              </a>
                            <a
                v-if="!repo"
                :href="repo"
                class="text-gray-200 text-base cursor-not-allowed"
              >
                Github Repo &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply relative mx-auto md:mr-6 md:ml-0 my-3 w-full;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
}
.cardInner {
  @apply px-4 py-6 bg-white shadow-lg sm:rounded-3xl bg-clip-padding bg-opacity-60 border border-gray-200;
}

.checkIcon {
  @apply flex-shrink-0 h-5 w-5 text-cyan-500;
}
</style>
