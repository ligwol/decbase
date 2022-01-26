<template>
  <div class="about">
    <HeaderAdmin/>
    <AboutUs />
    <Scheme />
    <Testimonials />
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import HeaderAdmin from '@/components/Admin/HeaderAdmin.vue'
import AboutUs from '@/components/Home/AboutUs.vue'
import Scheme from '@/components/Home/Scheme.vue'
import Testimonials from '@/components/Home/Testimonials.vue'
import Subscribe from '@/components/Home/Subscribe.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
  name: 'AboutAdmin',
  components: {
    HeaderAdmin,
    AboutUs,
    Scheme,
    Testimonials,
    Subscribe,
    Footer,
  }, 
  mounted(){
        document.title = "About Us | Decbase"
    }
}
</script>

<style>

</style>
