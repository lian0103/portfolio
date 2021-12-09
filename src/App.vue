<script setup>
import { ref } from "vue";
import vHeader from "@/components/Header.vue";

let counter = ref(0);
</script>

<template>
  <div>
    <vHeader></vHeader>
    <main class="container mx-auto bg-gray-100">
      <router-view />
    </main>
  </div>
</template>
