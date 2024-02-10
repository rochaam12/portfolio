<template>
  <HeaderPage />
  <main>
    <HomePage />
    <MarqueePage text="PROYECTOS SELECCIONADOS"/>
    <ProjectsPage />
  </main>
</template>

<script>
import HeaderPage from './components/Header.vue'
import HomePage from './components/Home.vue'
import MarqueePage from './components/Marquee.vue'
import ProjectsPage from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    HeaderPage,
    MarqueePage,
    ProjectsPage
  },
}
</script>

<style lang="scss" scoped>
</style>
