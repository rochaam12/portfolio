<template>
    <div class="container-fluid bg-primary">
      <small>&copy; {{ currentYear }} Miguel Rocha</small>
    </div>
</template>


<script>
export default {
  name: 'FooterPage',
  computed: {
    currentYear(){return new Date().getFullYear();}
  }
}
</script>


<style lang="scss" scoped>
</style>