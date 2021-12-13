<script setup>
import { onMounted } from "vue";
import { routes } from "@/routers/index";

const handleLinkBtn = (e) => {
  let collapse = document.querySelector("#navbar-collapse");
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};

onMounted(() => {
  let toggleBtn = document.querySelector("#navbar-toggle");
  toggleBtn.onclick = handleLinkBtn;
});

const menuList = routes
  .map((route) => {
    if (route.meta?.title) {
      return {
        name: route.meta.title,
        route: route.path,
      };
    }
  })
  .filter((route) => route);
</script>

<template>
  <div class="bg-white shadow py-1">
    <div class="container px-4 mx-auto md:flex md:items-center">
      <div class="flex justify-between items-center">
        <img
          class="rounded-full h-16 w-16 py-2 px-2"
          src="https://i.imgur.com/zfyjRKY.jpg"
          alt="logo"
        />
        <router-link
          class="font-bold text-xl text-indigo-600 fontIkea"
          to="/about"
          >DOPI</router-link
        >

        <button class="hamberBtn md:hidden" id="navbar-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <div
        class="
          hidden
          md:flex
          flex-col
          md:flex-row md:ml-auto
          mt-3
          md:mt-0
          bg-gray-100
          md:bg-white
          overflow-x-hidden
        "
        id="navbar-collapse"
      >
        <router-link
          v-for="item in menuList"
          :key="item.name"
          :class="$route.path === item.route ? 'active' : 'menuItem'"
          :to="item.route"
          @click="handleLinkBtn"
          >{{ item.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hamberBtn {
  @apply border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75;
}

.active {
  @apply p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600;
}

.menuItem {
  @apply p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300;
}
</style>
