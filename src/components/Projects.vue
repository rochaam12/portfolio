<template>
        <section class="projects padding" id="projects">
            <div class="container">
                <template v-for="card in projectList" v-bind:key="card">
                    <div class="card bg-dark">
                        <div class="data">
                            <h2 class="mt-0 mb-0 font-title">{{ card.name }}</h2>
                            <p class="mt-0 mb-0">{{ card.date }}, {{ card.framework }}</p>
                            <div class="tags">
                                <span class="bg-primary" v-for="tag in card.types" v-bind:key="tag">{{ tag }}</span>
                            </div>
                        </div>
                        <div class="thumbnail">
                            <div class="frame" :class="card.thumbnailRatio">
                                <img :src="card.thumbnail" alt="">
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </section>
</template>


<script>
// import ProjectCard from './ProjectCard.vue'

import projects from '../data/projects.json'

export default {
  name: 'ProjectsPage',
  components: {
    // ProjectCard
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
            thumbnail: el.after.images[0] || el.before.images[0] || null,
            thumbnailRatio: el.after.imageRatio || el.before.imageRatio
           };

           console.log(item);

           list.push(item);
        });

        return list;
    }
  }
}
</script>


<style lang="scss" scoped>
    .card{
        display: flex;
        padding: 0;
        overflow: hidden;
        
        &:not(:last-child){margin-bottom: 2em;}

        .data{
            text-align: left;
            flex: 1;
            padding: 2em;
            margin: auto 0;

            .tags{
                span{
                    display: inline-block;
                    font-size: .8em;
                    padding: 4px 10px;
                    border-radius: 6px;
                    margin: 4px 4px 0 0;
                }
            }
        }

        .thumbnail{
            width: 340px;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            height: 180px;
            .frame{
                margin: auto auto 0;
                height: auto;
                flex: 1;
                border-radius: 22px 22px 0 0;
                border: 6px solid #000;
                border-width: 12px 12px 0;
                background-color: var(--white);
                overflow: hidden;

                transform: translateY(30px);
                transition: .3s;

                &.horizontal{width: 90%;}
                &.vertical{width: 70%;}

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top;
                }
            }
        }
        
        &:hover{
            cursor: pointer;
            // background-color: #6661;

            .thumbnail .frame{transform: translateY(10px);}
        }
    }
</style>