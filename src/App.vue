<template>
  <HeaderPage :isWeb="isWeb"/>
  <main>
    <HomePage />
    <MarqueePage text="SELECTED PROJECTS"/>
    <ProjectsPage :isWeb="isWeb"/>
    <FooterPage />
  </main>
  <ProjectCard :item="currentProjectView" :isOpen="isProjectViewOpen"/>
</template>

<script>
import HeaderPage from './components/Header.vue'
import HomePage from './components/Home.vue'
import MarqueePage from './components/Marquee.vue'
import ProjectsPage from './components/Projects.vue'
import ProjectCard from './components/ProjectCard.vue'
import FooterPage from './components/Footer.vue'

import {ref, provide} from 'vue';

export default {
  name: 'App',
  setup(){
    let currentProjectView = ref({});
    let isProjectViewOpen = ref(false);
    function setProjectView(data){
      currentProjectView.value = data;
      isProjectViewOpen.value = true;
      document.querySelector('#projectView').scrollTo(0, {behavior: 'smooth'})
      document.querySelector('body').classList.add('ov-h');
    }
    function closeProjectView(){
        isProjectViewOpen.value = false;
        document.querySelector('#projectView').scrollTo(0, {behavior: 'smooth'})
        document.querySelector('body').classList.remove('ov-h');
      setTimeout(() => {
        currentProjectView.value = {};
      }, 500);
    }
    
    provide('setProject', setProjectView)
    provide('closeProject', closeProjectView)

    return {currentProjectView, isProjectViewOpen};
  },
  components: {
    HomePage,
    HeaderPage,
    MarqueePage,
    ProjectsPage,
    ProjectCard,
    FooterPage
  },
  computed: {
    isWeb(){return window.innerWidth > 400;}
  },
}
</script>

<style lang="scss" scoped>
</style>
