<template>
    <div class="home-main half__block">
        <div class="home-info block__info">
            <p>Modern Interior</p>
            <h1>Create your Interior Design.</h1>
            <div class="home-info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
            </div>
            <button v-on:click="toggleContact" >
                Contact
            </button>
            <ContactUs v-if="!isHidden"/>
            
        </div>
        <div class="home-images block__img">
            <div class="home-images__block">
                <img class=" right" src="../../assets/image-1.png" alt="furniture">
                <div class="home-images__border right-border"></div>
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
                isHidden: true
            }
        }, 
        methods: {
            toggleContact: function(){
                this.isHidden = !this.isHidden;
                if(!this.isHidden){
                    window.onscroll = window.scrollTo(0, 0);
                } else{
                    window.onscroll = window.scrollTop(0);
                }
            },
        },
    }
</script>


<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/home-content.scss";
    @import "./../../styles/adaptive/adaptive-home.scss";
</style>