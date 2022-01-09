<template>
  <div class="about">
    <Header/>
    <AboutUs />
    <Scheme />
    <Testimonials />
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue'
import AboutUs from '@/components/Home/AboutUs.vue'
import Scheme from '@/components/Home/Scheme.vue'
import Testimonials from '@/components/Home/Testimonials.vue'
import Subscribe from '@/components/Home/Subscribe.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    AboutUs,
    Scheme,
    Testimonials,
    Subscribe,
    Footer,
  }, 
}
</script>

<style>

</style>
