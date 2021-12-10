<script setup>
import ProfileVue from "@/components/Profile.vue";
import CardsVue from "@/components/Cards/index.vue";
import { onMounted } from 'vue';
import gsap from "gsap";

function initGsap() {
  gsap
    .timeline()
    .from("#profileBox", { duration: 2, opacity: 0, scale: 1.1 })
    .from("#navbar-collapse a", {
      duration: 2,
      opacity: 0,
      stagger: 0.3,
      xPercent: 100
    });
}

onMounted(()=>{
  initGsap();
})
</script>

<template>
  <div class="container px-2">
    <ProfileVue />

    <CardsVue />
  </div>
</template>
