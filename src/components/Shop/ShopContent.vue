<template>
  <div class="shop-content">
    <div class="shop-content__container">
      <div class="shop-content__info">
        <h2>
          The art of accessorising
        </h2>
        <div class="shop-content__intro">
          Creating your dream home? Then you'll know it's all in the details. From statement lamps and eye-catching wall
          art ­to plush textiles and scented candles, we'll help you get the little things right – and deliver them fast
          on express dispatch.
        </div>
        <p>
          <router-link to="/contact" class="link">Visit our shop</router-link>
        </p>
      </div>
      <div class="shop-content__images">
        <div class="block">
          <img src="./../../assets/shop/img1.jpg" alt="furniture">
          <img src="./../../assets/shop/img2.jpg" alt="furniture">
        </div>
        <div class="block">
          <img src="./../../assets/shop/img3.jpg" alt="furniture">
          <img src="./../../assets/shop/img4.jpg" alt="furniture">
        </div>
      </div>
    </div>
    <div class="shop-content__insta">
      <div class="shop-content__insta__info">
        <h2>
          Shop Instagram
        </h2>
        <p>
          Less than humble about your abode?<br> Mention @decbase in your photos and we'll feature the best pics on our site.
        </p>
      </div>
      <div class="shop-content__insta__img">

        <img src="./../../assets/shop/img5.jpg" alt="furniture">
        <!-- <img src="./../../assets/shop/img7.jpg" alt="furniture"> -->
        <img src="./../../assets/shop/img8.jpg" alt="furniture">
        <img src="./../../assets/shop/img10.jpg" alt="furniture">
        <!-- <img src="./../../assets/shop/img11.jpg" alt="furniture">
        <img src="./../../assets/shop/img12.jpg" alt="furniture"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopContent',
  components: {
  },
  data() {
      return {
        
      }
  }
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/shop.scss";
    @import "./../../styles/adaptive/adaptive-shop.scss";
</style>