<template>
  <div class="shop">
    <Header />
    <ShopContent />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue'
import ShopContent from '@/components/Shop/ShopContent.vue'
import Footer from '@/components/Home/Footer.vue'
export default {
  name: 'Shop',
  components: {
    Header,
    ShopContent,
    Footer,
  }
}
</script>

<style>

</style>