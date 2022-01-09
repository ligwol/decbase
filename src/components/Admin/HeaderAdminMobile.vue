<template>
  <div class="header-mobile" v-if="!isHidden">
        
        <div class="header-logo">
            <img src="../../assets/logo-full.png" alt="logo">
            <button v-on:click="$parent.toggleANav()"> <i class="fas fa-times"></i> </button>
        </div>
        <div class="header-link">
            <router-link to="/home-admin" class="link">Home</router-link>
            <router-link to="/project" class="link">Project</router-link>
            <router-link to="/services" class="link">Services</router-link>
            <router-link to="/blog-admin" class="link">Blog</router-link>
            <router-link to="/project" class="link">Shop</router-link>
            <router-link to="/contact-admin" class="link">Contact</router-link>
        </div>
  </div>
</template>

<script>
export default {
    name: 'HeaderAdminMobile',

}
</script>

<style lang="scss" scoped>
    @import "./../../styles/adaptive-style.scss";
</style>