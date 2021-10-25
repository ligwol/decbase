<template>
  <div class="home">
    <Header />
    <HomeContent />
    <OurService />
    <AboutUs />
    <Scheme />
    <Comments />
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue'
import HomeContent from '@/components/Home/HomeContent.vue'
import OurService from '@/components/Home/OurService.vue'
import AboutUs from '@/components/Home/AboutUs.vue'
import Scheme from '@/components/Home/Scheme.vue'
import Comments from '@/components/Home/Comments.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HomeContent,
    OurService,
    AboutUs,
    Scheme,
    Comments,
  }
}
</script>
