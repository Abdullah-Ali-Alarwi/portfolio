<template>
  <main :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <span class="text-[30px] text-cyan-200">{{ $t('experinceInLive') }}</span>

    <p class="text-[#93b9d1] m-6">{{ $t('ExperinceShow') }}</p>

    <div v-for="(i, index) in ($i18n.locale === 'ar' ? ArJobs : EnJobs)" :key="index">
      <Job 
        :title="i.title" 
        :content="i.content" 
        :startDate="i.startDate" 
        :endDate="i.endDate" 
        :place="i.place" 
      />
    </div>

    <div class="video-wrapper">
      <button 
        @click="showVideo = !showVideo" 
        class="bg-[#04CCEA] text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#70a6c5]"
      >
        {{ showVideo ? $t('hidevieo') : $t('showVideo') }}
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
import { ref, computed } from 'vue'; 
import Job from '../component/Job.vue';
import { useI18n } from 'vue-i18n';
import ar from '../locales/ar.json';
import en from '../locales/en.json';

const { t, locale } = useI18n();
const ArJobs = computed(() => ar.jobs);
const EnJobs = computed(() => en.jobs);



</script>


<style scoped>
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
