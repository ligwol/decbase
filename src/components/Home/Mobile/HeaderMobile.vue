<template>
<div class="header-shadow" v-on:click="$parent.toggleNav()"></div>
  <div class="header-mobile" v-if="!isHidden">
        
        <div class="header-logo">
            <img src="../../../assets/logo-full.png" alt="logo">
            <button v-on:click="$parent.toggleNav()"> <i class="fas fa-times"></i> </button>
        </div>
        <div class="header-link">
            <router-link to="/" class="link">Home</router-link>
            <router-link to="/project" class="link">Project</router-link>
            <router-link to="/services" class="link">Services</router-link>
            <router-link to="/about" class="link">About</router-link> 
            <router-link to="/blog" class="link">Blog</router-link>
            <router-link to="/shop" class="link">Shop</router-link>
            <router-link to="/contact" class="link">Contact</router-link>
        </div>
        <div class="header-signin">
            <router-link to="/login" class="link">Sign In</router-link>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import "./../../../styles/adaptive-style.scss";
</style>