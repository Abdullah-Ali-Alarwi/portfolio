<template>
  <main :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <nav class="flex justify-between items-center bg-[rgb(12,12,12)] text-amber-50 p-4 relative">
      <h1 class="text-xl font-bold text-cyan-500 title">{{$t('Abuullah' )}}</h1>
  
      <button @click="toggleMenu" class="sm:hidden text-2xl transition-transform duration-500 ease-in-out">
        {{ isMenuOpen ? '✖' : '☰' }}
      </button>
  
      <transition name="slide-fade">
        <ul
          v-show="isMenuOpen || windowWidth >= 640"
          class="flex flex-col sm:flex-row gap-4 items-center bg-[rgb(12,12,12)] sm:bg-transparent p-4 sm:p-0 absolute sm:static left-0 right-0 top-14 sm:top-auto"
        >
          <li><a href="#" @click.prevent="scrollToSection('Protofilo')" class="hover:text-cyan-400 text-[22px]">{{$t('projects' )}} </a></li>
          <li><a href="#" @click.prevent="scrollToSection('ExperinceInLive')" class="hover:text-cyan-400 text-[22px]">{{$t("experince")}}</a></li>
          <li><a href="#" @click.prevent="scrollToSection('certificationspage')" class="hover:text-cyan-400 text-[22px]">{{ $t("certification") }}</a></li>
          <li><a href="#" @click.prevent="scrollToSection('About')" class="hover:text-cyan-400 text-[22px]">{{ $t("about") }}</a></li>
          <li><a href="#" @click.prevent="scrollToSection('contact')" class="hover:text-cyan-400 text-[22px]">{{ $t("contact") }}</a></li>
          <select v-model="$i18n.locale" class="text-[22px]" @change="saveLanguage">
            <option v-for="locale in $i18n.availableLocales" :key="locale" :value="locale">
              {{ locale === 'ar' ? 'العربية' : 'English' }}
            </option>
          </select>
        </ul>
      </transition>
    </nav>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      windowWidth: window.innerWidth,
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 640) {
        this.isMenuOpen = false;
      }
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    saveLanguage() {
      localStorage.setItem('language', this.$i18n.locale);
    },
  },

  mounted() {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      this.$i18n.locale = storedLanguage;
    }

    this.handleResize(); 
    window.addEventListener("resize", this.handleResize);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
ul li {
  list-style: none;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

a:hover {
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-shadow: 
    0 0 5px rgba(4, 204, 234, 0.9), 
    0 0 10px rgba(4, 204, 234, 0.8), 
    0 0 20px rgba(4, 204, 234, 0.7), 
    0 0 30px rgba(4, 204, 234, 0.6);
}

.title {
  font-size: 25px;
  font-weight: bold;
  text-shadow: 
    0 0 0px rgba(4, 204, 234, 0.9), 
    0 0 10px rgba(4, 204, 234, 0.8), 
    0 0 0px rgba(4, 204, 234, 0.7), 
    0 0 0px rgba(4, 204, 234, 0.6);
}
</style>
