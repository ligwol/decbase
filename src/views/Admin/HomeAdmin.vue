<template>
  <div class="home">
    <HeaderAdmin/>
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
import HeaderAdmin from '@/components/Admin/HeaderAdmin.vue'
import HomeContent from '@/components/Home/HomeContent.vue'
import OurService from '@/components/Home/OurService.vue'
import AboutUs from '@/components/Home/AboutUs.vue'
import Scheme from '@/components/Home/Scheme.vue'
import Testimonials from '@/components/Home/Testimonials.vue'
import LatestNews from '@/components/Home/LatestNews.vue'
import Subscribe from '@/components/Home/Subscribe.vue'
import Footer from '@/components/Home/Footer.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'Home',
  components: {
    HeaderAdmin,
    HomeContent,
    OurService,
    AboutUs,
    Scheme,
    Testimonials, 
    LatestNews,
    Subscribe,
    Footer,
  },
  data() {
        return {
            user: null,
        }
    },
    created() {
        const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                this.user = user;
            } else {
                this.user = null;
                this.$router.push('/login'); 
            }
            });
    }, 
}
</script>
