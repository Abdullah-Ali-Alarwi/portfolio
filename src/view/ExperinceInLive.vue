<template>
<main>
  <span class="text-[30px] text-cyan-200 "> Experience in Life
</span>
 

<p class="text-[#93b9d1] m-6">I have worked in several jobs, and I am going to showcase some of them in this section.</p>
<div v-for="(i,index) in job" :key="index">
  <Job :title="i.title" :content="i.content" :startDate="i.startDate" :endDate="i.endDate"  :place="i.place" />
</div>
<div class="video-wrapper">
    <button 
      @click="showVideo = !showVideo" 
      class="bg-[#04CCEA)] text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#70a6c5]">
      {{ showVideo ? 'Hide Video' : 'Show Example' }}
    </button>

    <div v-if="showVideo" class="mt-4 videobox">
      <iframe 
        width="50%" 
       height="315"
        src="https://www.youtube.com/embed/TDXh3UEGB7o" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</main>

</template>

<script setup>
import { ref } from 'vue';
import Job from '../component/Job.vue';


const showVideo = ref(false);

const job = ref([
  {
    title: "Bank Officer",
    place: "Tadhmon International Islamic Bank",
    content: "I have been employed as a Bank Officer at Tadhamon International Islamic Bank since 23/02/2020. My responsibilities include performing accounting transactions, opening new accounts, processing withdrawals, deposits, and transfers, issuing cards, counting money, managing electronic and manual archives, marketing, and resolving common issues we face. Additionally, in the absence of the manager, I serve as the acting office manager, handling administrative tasks and ensuring smooth office operations."

,
    startDate: "23/02/2020",
    endDate: "present"
  },
  {
    title: "Trainer",
    place: "Al-farwi Exchange  Company",
    content: "I trained employees to work on global money transfer systems such as MoneyGram, Express Money, and Shift. I also wrote a book explaining the work in a simple way and trained employees on the local system, such as Ebda Soft."
,
    startDate: "01/2018",
    endDate: "1/2020"
  },
  {
    title: "Customer Service Officer and Head of the International Transfers Department",
    place: "Al-farwi Exchange  Company",
    content: "I have been employed as the Manager of the Global Transfers Service Department, handling MoneyGram, Western Union, Express Money, Shift, and all local systems ."
,
    startDate: "01/2018",
    endDate: "1/2020"
  },    
  {
    title: "English Language Teacher",
    place: "Al-Fatah School",
    content: "English Language Teacher at Al-Fatah School in Al-Baidha City from 09/03/2018 to 21/03/2018, and from 01/02/2020 onwards."
,
    startDate: "09/03/2018",
    endDate: "21/03/2018"
  },    
  {
    title: "Front-end Developer",
    place: "freelancer",
    content:"Aspiring Front-End Developer with knowledge of building responsive websites using Vue.js and Vuex for state management. Familiar with using Tailwind CSS for designing user-friendly interfaces and GitHub for version control. Gaining experience in testing with Jest to ensure code reliability. Eager to apply and grow my skills in a professional development environment."
,
    startDate: "01/01/2024",
    endDate: "present"
  },    
  {
    title: "Voice Over Artist & Poetry Writer",
    place: "freelancer",
    content:"I am a voice-over artist with the ability to deliver clear and engaging voiceovers for various projects such as commercials, programs, and educational content. I can adjust my tone and style to suit the required context, whether formal or informal, and effectively convey messages to the audience. Additionally, I am skilled in writing poetry in Arabic and excel in public speaking.",


    startDate: "2020",
    endDate: "present"
  },    
    
]);





</script>

<style  scoped>
 
 h1{
  color: rgb(141, 146, 141);
  font-size: 2em;
  margin: 3em;
 }

 span{
  
  font-size: 2em;
  margin: 1em;
 }

 .video-wrapper {


  text-align: center;
  margin-top: 20px;
  margin: auto;
}

.videobox {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style> 

