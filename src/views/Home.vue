<template>
  <div class="home">
    <Header/>
    <HomeContent />
    <OurService />
    <AboutUs />
    <Scheme />
    <Testimonials />
    <LatestNews />
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue'
import HomeContent from '@/components/Home/HomeContent.vue'
import OurService from '@/components/Home/OurService.vue'
import AboutUs from '@/components/Home/AboutUs.vue'
import Scheme from '@/components/Home/Scheme.vue'
import Testimonials from '@/components/Home/Testimonials.vue'
import LatestNews from '@/components/Home/LatestNews.vue'
import Subscribe from '@/components/Home/Subscribe.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HomeContent,
    OurService,
    AboutUs,
    Scheme,
    Testimonials, 
    LatestNews,
    Subscribe,
    Footer,
  }, 
}
</script>
