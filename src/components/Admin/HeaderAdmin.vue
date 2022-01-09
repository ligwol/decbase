<template>
  <HeaderAdminMobile v-if="!isHidden" />
  <div class="hdr">
    <div class="header" v-if="!mobileView">
            <div class="header-logo">
                <img src="../../assets/logo-full.png" alt="logo">
            </div>
            <div class="header-link">
                <router-link to="/home-admin" class="link">Home</router-link>
                <router-link to="/project" class="link">Project</router-link>
                <router-link to="/services" class="link">Services</router-link>
                <router-link to="/about" class="link">About</router-link> 
                <router-link to="/blog-admin" class="link">Blog</router-link>
                <router-link to="/shop" class="link">Shop</router-link>
                <router-link to="/contact-admin" class="link">Contact</router-link>
                <router-link to="/account" class="link">Account</router-link>
            </div>
        </div>
    <div class="header__click-button" v-if="mobileView" v-on:click="toggleANav">
      <i class="fas fa-ellipsis-v"></i>
    </div>
  </div>

</template>

<script>
import HeaderAdminMobile  from './HeaderAdminMobile.vue'
export default {
    name: 'AHeader',
    components: {
      HeaderAdminMobile,
    },
    data: function(){
        return{
            isHidden: true,
            showNav: false,
            mobileView: false,
        }
    },
    mounted() {
        this.handleView();
    },
    methods: {
        toggleANav: function(){
            this.isHidden = !this.isHidden;
            if(!this.isHidden){
                window.onscroll = function () { window.scrollTo(0, 0); };
            } else{
            window.onscroll = function () { window.scrollTop(0); };
            }
        },
        handleView() {
            if(window.innerWidth <= 1100){
                this.mobileView = true;
            }else{
                this.mobileView = false;
            }
            console.log('window size: ' + window.innerWidth);
        },
    },
}
</script>

<style lang="scss" scoped>
@import "./../../styles/header.scss";
@import "./../../styles/style.scss";
@import "./../../styles/adaptive/adaptive-auth.scss";

</style>