<template>
  <div class="home">
    <Header />
    <HomeContent />
    <OurService />
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue'
import HomeContent from '@/components/Home/HomeContent.vue'
import OurService from '@/components/Home/OurService.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HomeContent,
    OurService,
  }
}
</script>
