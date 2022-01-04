<template>
    <div class="header">
        <div class="header-logo">
            <img src="../../assets/logo-full.png" alt="logo">
        </div>
        <div class="header-link">
            <router-link to="/" class="link">Home</router-link>
            <router-link to="/project" class="link">Project</router-link>
            <router-link to="/services" class="link">Services</router-link>
            <router-link to="/about" class="link">About</router-link> 
            <router-link to="/blog" class="link">Blog</router-link>
            <router-link to="/project" class="link">Shop</router-link>
            <router-link to="/contact" class="link">Contact</router-link>
        </div>         
    </div>
</template>

<script>
export default{
    name: 'Header',
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/header.scss";
</style>