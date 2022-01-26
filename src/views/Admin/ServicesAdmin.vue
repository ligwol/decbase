<template>
  <div class="services">
    <HeaderAdmin/>
    <OurService />
    <AboutUs />
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import HeaderAdmin from '@/components/Admin/HeaderAdmin.vue'
import OurService from '@/components/Home/OurService.vue'
import AboutUs from '@/components/Home/AboutUs.vue'
import Subscribe from '@/components/Home/Subscribe.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
  name: 'Home',
  components: {
    HeaderAdmin,
    OurService,
    AboutUs,
    Subscribe,
    Footer,
  }, 
  mounted(){
        document.title = "Services | Decbase"
    }
}
</script>
