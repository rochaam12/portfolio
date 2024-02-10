<template>
    <div class="container-fluid header">
      <div class="row">
        <div class="col-4">
          <div class="logo font-title"><a href="#home" class="line">rcm</a></div>
        </div>
        <template v-if="isWeb">
          <div class="col-8 mt-a mb-a">
            <div class="content">
              <nav>
                <ul>
                  <template v-for="tab in tabs" v-bind:key="tab">
                    <li><a @click="goTo(tab)" :class="{active: activeSection == tab}">{{getTabName(tab)}}</a></li>
                  </template>
                </ul>
              </nav>
              <div class="language">
                <div class="language-option" :class="{active: activeLang == 'es'}"><img src="flags/mexico.svg" alt="Option for Spanish website"></div>
                <div class="language-option" :class="{active: activeLang == 'en'}"><img src="flags/united_states.svg" alt="Option for English website"></div>
                <div class="language-option" :class="{active: activeLang == 'jp'}"><img src="flags/japan.svg" alt="Option for Japanese website"></div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
</template>


<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      tabs: [
      'home',
      'about',
      'projects',
      'contact',
      ],
      activeSection: 'home',
      activeLang: 'es',
    }
  },
  computed: {
    isWeb(){return window.innerWidth > 320;}
  },
  methods: {
    goTo(id){
      document.querySelector(`#${id}`).scrollIntoView({behavior: 'smooth'});
    },
    getTabName(id){
      const names = {
        home: 'Inicio',
        about: 'Sobre Mi',
        projects: 'Proyectos',
        contact: 'Contacto'
      }

      return names[id] || id;
    }
  }
}
</script>


<style lang="scss" scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
    background-color: var(--white);
    z-index: 100;
    font-size: .95rem;

    .logo{
      font-size: 2em;
      line-height: 1;
      text-align: left;
      
      a{
        font-weight: 900;
      }
    }
  }

  .content{
    display: flex;
    justify-content: flex-end;

    ul{
      list-style-type: none;
      padding: 0;
      display: flex;
      list-style: none;
      margin: auto 0;
      
      li{margin: auto 10px; font-weight: bold; line-height: 32px;}
    }

    .language{
      display: flex;
      gap: 20px;
      margin-left: 20px;

      .language-option{
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #0001;
        overflow: hidden;

        img{width: 100%;height: 100%;}

        &.active{outline: 2px solid var(--primary);}
      }
    }
  }
</style>