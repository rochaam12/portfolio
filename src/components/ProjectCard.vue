<template>
  <div class="wrapper" @scroll="setScroll" :class="{open: isOpen}" id="projectView">
    <div class="head font-title" :class="{light: scrollPos < 100}">
      <h1><b>{{ item?.name }}</b></h1>
      <span @click="close">&#x2715;</span>
    </div>
    <div class="card bg-white">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
              <div class="top" :style="{background: item?.background}">
                <img :src="item?.thumbnail" alt="Project thumbnail">
              </div>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="container">
          <div class="row">
            <div class="col-4 ta-l">
              <p><b>Client:</b> <template v-for="client in item?.clients" v-bind:key="client"><a :href="client.url">{{ client.name }}</a></template></p>
              <p><b>Date:</b> {{ item?.date }}</p>
              <p><b>Framework(s):</b> {{ item?.framework }}</p>
              <p><b>Type(s):</b>  <template v-for="(typ, i) in item?.type" v-bind:key="typ"><span><span v-if="i">, </span> {{ typ }}</span></template></p>
            </div>
            <div class="col-8 ta-l">
                <template v-for="p in item?.description" v-bind:key="p"><p v-html="p"></p></template>
            </div>
          </div>
          <div class="row">
            <div class="col-12 ta-l">
              <h1 class="font-title text-primary">💡 Case</h1>
              <p v-html="item?.case"></p>
            </div>
          </div>
          <!-- BEFORE  -->
          <div class="row">
            <div class="col-12 ta-l">
              <h1 class="font-title text-primary">✏️ Start of project</h1>
              <p><b>{{ item?.before?.title }}</b></p>
              <ul>
                <template v-for="p in item?.before?.text" v-bind:key="p"><li v-html="p"></li></template>
              </ul>
            </div>
            <template v-for="img in item?.before?.images" v-bind:key="img">
              <div :class="'col-' + item?.before?.colSize || 4">
                <div class="frame"><img :src="img"></div>
              </div>
            </template>
          </div>
          <!-- AFTER  -->
          <div class="row">
            <div class="col-12 ta-l">
              <h1 class="font-title text-primary">✨ End of project</h1>
              <p><b>{{ item?.after?.title }}</b></p>
              <ul>
                <template v-for="p in item?.after?.text" v-bind:key="p"><li v-html="p"></li></template>
              </ul>
            </div>
            <template v-for="img in item?.after?.images" v-bind:key="img">
              <div :class="'col-' + item?.after?.colSize || 4">
                <div class="frame"><img :src="img"></div>
              </div>
            </template>
          </div>
          <!-- ACHIEVEMENTS  -->
          <div class="row">
            <div class="col-12 ta-l">
              <h1 class="font-title text-primary">🏆 Achievements</h1>
              <ul>
                <template v-for="p in item?.achievements" v-bind:key="p"><li v-html="p"></li></template>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer bg-dark">
        <div class="container">
          <h2 class="mb-0 mt-0 font-title">End of case</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {inject} from 'vue';

export default {
  name: 'ProjectCard',
  setup(){
    const close = inject('closeProject');
    return {close};
  },
  props: ['item', 'isOpen'],
  data() {
    return {
      scrollPos: 0,
    }
  },
  methods: {
    setScroll(e){this.scrollPos = e.target.scrollTop},
  }
}
</script>


<style lang="scss" scoped>
  .wrapper{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;

    background-color: #0000;
    overflow: hidden;
    pointer-events: none;

    transition: background-color .5s;
    
    .head{
      width: 100%;
      height: 4em;
      position: sticky;
      top: 0;
      display: flex;
      justify-content: space-between;
      padding: 0 1em;
      font-size: 2em;
      z-index: 2;

      &.light{color: var(--white);}

      h1, span{
        margin: auto 0;
      }

      span{
        cursor: pointer; &:hover{color: rgb(226, 84, 84);}
      }
    }
    .card{
      width: 100%;
      min-height: calc(100vh - 4em);
      height: fit-content;
      border-radius: 0;
      padding: 0;
    }

      .head{transform: translateY(-4em); transition: transform .5s;}
      .card{transform: translateY(calc(100vh - 4em)); transition: transform .5s;}

    &.open{
      background-color: #000e;
      overflow: auto;
      pointer-events: all;
      .head{transform: translateY(0);}
      .card{transform: translateY(0);}
    }
  }

  .top{
    width: 100%;
    height: 340px;
    overflow: hidden;

    img{
      width: 100%;
      max-width: 1000px;
      height: 100%;
      object-fit: cover;
      object-position: center 20%;
    }
  }

  .body{
    padding: 4em 0;
    line-height: 1.5;

    h1{margin: 1.2em 0;}
    p{margin: 0;}
    ul{
      padding-left: 1em;
      li{margin-bottom: .8em;}
    }

    .frame{
      width: 100%;
      margin-top: 2em;
      overflow: hidden;
      border-radius: 12px;

      img{
        width: 100%;
        display: block;
      }
    }
  }

  .footer{
    padding: 4em 0;
  }
</style>