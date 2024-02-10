<template>
    <section class="splash" id="home">
        <div class="container-fluid mt-a">
            <h1 class="font-title"><b>Soy Miguel</b></h1>
            <h3 class="text-primary">Ingeniero en software_Desarrollador de UI/UX <!-- Productor musical --></h3>
        </div>
        <div class="container-fluid">
            <img src="yo.svg" alt="Dibujo de Miguel" class="hero" width="500">
        </div>
        <div class="scroll-help">Desliza para ver mas <span class="text-primary">&#x2935;</span></div>
    </section>
    <section class="about padding bg-dark" id="about">
        <div class="container">
            <h2>Soy un desarrollador de <b class="text-primary">UI/UX</b> que le interesa encontrar la manera mas eficiente de crear las mejores experiencias.</h2>
            <p>Me considero alguien que piensa de forma logica, sin embargo me desarollo mucho en el mundo artistico desde toda mi vida; esto me ha dado un gusto especial por el diseno, ya que me ha permitido explorar las diferentes formas en la que se puede interactuar con un usuario y al mismo tiempo buscar la eficiencia en el desarrollo y mantenimiento.</p>
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