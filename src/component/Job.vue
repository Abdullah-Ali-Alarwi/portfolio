<template>
  <main>
  <div class="box">

    <h1 class="text-cyan-200  text-2xl font-bold">{{ title }} </h1>
    <span class="text-[#7f8686] font-bold">{{ place }}</span>
    <p>{{ content }}</p>
    <p class="text-cyan-300">From <strong class="font-bold text-[white] ">{{ startDate }}</strong> to <strong class="font-bold text-[white]">{{endDate}}</strong></p>
  </div>

</main>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['title', 'place', 'content', 'startDate', 'endDate']);
</script>

<style scopd>


.box{
  background-color: rgb(33, 36, 33);
  padding: 1em;
  margin: 1em;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

</style>