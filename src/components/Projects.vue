<template>
        <section class="projects" :class="{padding: isWeb}" id="projects">
            <div class="container">
                <template v-for="(card, i) in projectList" v-bind:key="card">
                    <div class="item" :style="{background: card.background}" @click="setProject(getProject(i))">
                        <div class="thumbnail"><img :src="card.thumbnail" alt=""></div>
                        <div class="data">
                            <h1 class="mt-0 mb-0 font-title">{{ card.name }}</h1>
                            <div class="tags">
                                <span class="bg-primary" v-for="tag in card.types" v-bind:key="tag">{{ tag }}</span>
                            </div>
                            <p class="mt-0 mb-0"><span class="bg-dark">View Case &nbsp; &#8594;</span></p>
                        </div>
                    </div>
                </template>
            </div>
        </section>
</template>


<script>
import {inject} from 'vue';
import projects from '../data/projects.json'

export default {
  name: 'ProjectsPage',
  setup(){
    const setProject = inject('setProject');

    // setProject(projects[0]);

    return {setProject};
  },
  props: ['isWeb'],
  components: {
  },
  computed: {
    projectList(){
        let list = [];

        projects.forEach(el => {
           const item = {
            name: el.name,
            date: el.date,
            types: el.type,
            framework: el.framework,
            thumbnail: el.thumbnail || el.after.images[0] || el.before.images[0] || null,
            background: el.background,
           };
           list.push(item);
        });

        return list;
    }
  },
  methods:{
    getProject(i){return projects[i] || {}}
  }
}
</script>


<style lang="scss" scoped>
    .item{
        display: flex;
        position: relative;
        background-color: #aaa1;
        cursor: pointer;
        overflow: hidden;

        &:not(:last-child){margin-bottom: 4em;}

        .data{
            text-align: left;
            width: 50%;
            padding: 14em 2em 4em;
            margin: auto 0;
            order: 1;

            h1{
                display: block;
                width: 100%;
                font-size: 4em;
                position: relative;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .tags{
                span{
                    display: inline-block;
                    font-size: .8em;
                    padding: 4px 10px;
                    border-radius: 6px;
                    margin: 4px 4px 1em 0;
                }
            }

            p{
                margin-top: .5em;
                span{
                    border-radius: 6px;
                    padding: 10px 1.4em;
                    position: relative;
                    left: 0;
                    transition: .3s;
                }
            }
        }

        .thumbnail{
            width: 100%;
            height: 240px;
            overflow: hidden;
            order: 3;
            
            position: absolute;
            right: 0;
            bottom: 0;
            width: 80%;
            height: 100%;

            img{width: 100%;height: 100%; object-fit: contain; object-position: center; transform: scale(1.25); transform-origin: left top;}
        }

        &:hover{
            cursor: pointer;
            background-color: #aaa1;

            p span{left: 30px;}

            .thumbnail {transform: translateX(0px); opacity: 1;}
        }
    }

    @media (max-width: 380px) {
        .item{
            flex-direction: column;
            
            &:not(:last-child){margin-bottom: 1em !important;}

            .data{
                order: 3;
                width: 100%;
                padding: 1em 1em 1em !important;
                background-color: var(--white);

                h1{
                    font-size: 2.4em;
                }
                .tags{
                    font-size: .8em;
                }
            }

            .thumbnail{position: relative; width: 100%;height: 100%; img{transform: none;}}
        }
    }
</style>