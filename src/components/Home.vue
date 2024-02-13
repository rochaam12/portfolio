<template>
    <section class="splash" id="home">
        <div class="container-fluid mt-a">
            <h1 class="font-title"><b>I'm Miguel</b></h1>
            <h3 class="text-primary">Software engineer, UI/UX Developer <!-- Productor musical --></h3>
        </div>
        <div class="container-fluid">
            <img src="yo.svg" alt="Dibujo de Miguel" class="hero" width="500">
        </div>
        <div class="scroll-help">Scroll to see more <span class="text-primary">&#x2935;</span></div>
    </section>
    <section class="about padding bg-dark" id="about">
        <div class="container">
            <h2>I'm a <b class="text-primary">UI/UX</b> developer that's interested in finding themost efficient way to create the best experiences.</h2>
            <p>I consider myself as someone that thinks in a logical way, but also I develop myself in the artistic world since I can remember; that has made me more of a design developer, and such thing has eprmitted me to explore the different ways in which we can interact with the user and at the same time develop in a fast and efiient way.</p>
        </div>
    </section>
</template>


<script>

export default {
  name: 'HomePage',
  methods: {
  },
  mounted() {
    setTimeout(() => {
        if(!(window.scrollY > 1)){document.querySelector('.scroll-help').classList.add('show')}
    }, 5000);
  }
}
</script>


<style lang="scss" scoped>
    .splash{
        width: 100%;
        height: 100svh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;

        h1{
            font-size: 9em;
            line-height: 0;
            position: relative;
            top: 28px;
        }

        h3{
            letter-spacing: 2px;
        }

        .hero{
            max-width: calc(100vw - 40px);
            margin: 30px auto 0;
            object-fit: contain;
            object-position: 50% 30px;
            display: block;
        }
    }


    .scroll-help{
        position: absolute;
        bottom: 0;right: 0;
        padding: .5em 1em;
        font-size: .8em;

        transition: .6s;

        opacity: 0;
        transform: translateY(40px);

        span{
            line-height: 1;
            font-size: 2em; 
            position: relative;
            top: 5px;
            left: 5px;
            float: right;
        }

        &.show{
            transform: translateY(0);
            opacity: 1;
        }
    }
    
</style>