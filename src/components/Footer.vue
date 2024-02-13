<template>
    <section class="contact padding bg-dark" id="contact">
      <div class="container ta-l">
        <p class="mt-0 mb-0">Get in touch!</p>
        <h1 class="font-title text-xl mt-0"><a href="mailto:miguelrocham12@hotmail.com">miguelrocham12@hotmail.com</a></h1>
      </div>
    </section>
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
h1{line-height: 1;}
p{font-size: 2em;}
</style>