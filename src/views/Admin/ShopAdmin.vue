<template>
  <div class="shop">
    <HeaderAdmin />
    <ShopContent />
    <Footer />
  </div>
</template>

<script>
import HeaderAdmin from '@/components/Admin/HeaderAdmin.vue'
import ShopContent from '@/components/Shop/ShopContent.vue'
import Footer from '@/components/Home/Footer.vue'
export default {
  name: 'Shop',
  components: {
    HeaderAdmin,
    ShopContent,
    Footer,
  },
  mounted(){
        document.title = "Shop | Decbase"
    }
}
</script>

<style>

</style>