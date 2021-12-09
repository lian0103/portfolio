<script setup>
import CardVue from "./Card.vue";
import {cardsData} from './data';


</script>

<template>
  <div class="cardList">
    <CardVue v-for="(data,idx) in cardsData" :key="idx" :data="data" />
  </div>
</template>
<style lang="scss" scoped>
.cardList{
    @apply max-w-4xl mb-4 flex items-center flex-wrap h-auto mx-auto lg:my-0 ;
    justify-content: space-around;

}

</style>
