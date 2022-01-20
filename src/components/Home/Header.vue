<template>

    <HeaderMobile v-if="!isHidden"/>
    <div class="hdr">
        <div class="header" v-if="!mobileView">
            <div class="header-logo">
                <img src="../../assets/logo-full.png" alt="logo">
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
        <div class="header__click-button" v-if="mobileView" v-on:click="toggleNav">
           <!-- <i class="fas fa-ellipsis-v"></i> -->
           <span></span>
           <span></span>
           <span></span>
        </div>
    </div>
</template>

<script>
import HeaderMobile  from './Mobile/HeaderMobile.vue'
export default{
    name: 'Header',
    components: {
        HeaderMobile,
    },
    data: function(){
        return{
            isHidden: true,
            showNav: false,
            mobileView: false,
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
    },
    unmounted() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    methods: {
        toggleNav: function(){
            this.isHidden = !this.isHidden;
            if(!this.isHidden){
                window.onscroll = function () { window.scrollTo(0, 0); };
            } else{
            window.onscroll = function () { window.scrollTop(0); };
            }
        },
        myEventHandler() {
            if(window.innerWidth <= 1100){
                this.mobileView = true;
            }else{
                this.mobileView = false;
            }
            console.log('window size: ' + window.innerWidth);
        },
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/header.scss";
</style>
