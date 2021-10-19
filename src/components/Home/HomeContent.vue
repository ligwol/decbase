<template>
    <div class="home-main">
        <div class="home-info">
            <p>Modern Interior</p>
            <h1>Create your Interior Design.</h1>
            <div class="home-info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
            </div>
            <div class="home-info__contact button" v-on:click="toggleContact" >
                Contact
            </div>
            <ContactUs v-if="!isHidden"/>
            
        </div>
        <div class="home-images">
            <div class="home-images__block">
                <img src="../../assets/image-1.png" alt="furniture">
                <div class="home-images__border"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import ContactUs from './ContactUs.vue'
    export default {
        name: 'HomeContent',
        components: {
            ContactUs,
        },
        data() {
            return {
                isHidden: false
            }
        }, 
        methods: {
            toggleContact: function(){
                this.isHidden = !this.isHidden;
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/home-content.scss";
</style>