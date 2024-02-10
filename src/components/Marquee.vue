<template>
    <section class="scrolling-band bg-primary">
        <div class="marquee font-title">
            <div class="wrapper">
                <div><h1>{{ text }}</h1></div>
                <div><h1>{{ text }}</h1></div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
  name: 'MarqueePage',
  props: ['text']
}
</script>


<style lang="scss" scoped>
    .scrolling-band{
        font-size: 4.5vw;
        overflow: hidden;
        white-space: nowrap;
        h1{margin: 0;  line-height: 1; font-style: italic; font-weight: 900;}
    }
    .marquee {
    position: relative;
    overflow: hidden;

    .wrapper {
        position: relative;
        overflow: hidden;
        width: 200%;
        animation: marquee 10s linear infinite;
    }

    .wrapper div {
        float: left;
        width: 50%;
    }
}
</style>