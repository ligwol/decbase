<template>
  <div class="test">
    <h1>IM HERE</h1>
    <vueper-slides>
        <vueper-slide v-for="i in 5" :key="i" :title="i.toString()" />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name: 'TestCarousel',
    components: { VueperSlides, VueperSlide },
    data: () => ({
        slides: [
            {
            title: 'Slide #1',
            content: 'Slide content.'
            }
        ]
    }),


}
</script>

<style lang="scss" scoped>

</style>