<template>
  <div class="mx-[2%]" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <Navbar />
    <Header />  
    <Skills />

   
    <Protofilo id="Protofilo"/>
    <About id="About"/>
    <ExperinceInLive id="ExperinceInLive"/>

    <certificationspage id="certificationspage"/>

    <Contact id="contact"/>
  
    <button 
      v-show="showButton" 
      @click="scrollToTop" 
      class="scroll-to-top-btn"
    >
      ↑
    </button>
    <div class="footer">
      <p>{{ $t("footer") }}</p>
    </div>
   
  </div>


</template>

<script setup>
import Navbar from './component/Navbar.vue';
import Header from './component/Header.vue';
import Skills from './component/Skills.vue';

import Protofilo from './view/Protofilo.vue';
import Contact from './view/Contact.vue';
import About from './view/About.vue';
import ExperinceInLive from './view/ExperinceInLive.vue';
import certificationspage from './view/CertificationPage.vue';


import { ref, onMounted, onBeforeUnmount } from 'vue';

const showButton = ref(false);

const handleScroll = () => {
  if (window.scrollY > 100) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  font-size: 20px;
  background-color: #007bff42;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 9999; 
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.scroll-to-top-btn:hover {
  background-color: #88b4e330;
  opacity: 1; 
}

.footer {
padding: 10px;
  margin: 50px 5px;
  background-color: #333;
  border-radius: 12px;
  text-align: justify;
}
</style>
