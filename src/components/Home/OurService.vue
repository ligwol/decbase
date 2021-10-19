<template>
    <div class="our-service">
        <p>what we do</p>
        <h1>Our Service</h1>
        <v-carousel :carousel_data="services"></v-carousel>
    </div>
</template>

<script>
import vCarousel from './v-carousel'
    export default {
        name: 'OurService',
        components: {
            vCarousel,
        },
        data() {
            return {
                services: [
                    {
                        id:1, 
                        title: 'Interior Design', 
                        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
                        img: "service1.png",
                        alt: 'service'
                    },
                    {
                        id: 2,
                        title: 'Architecture', 
                        content:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
                        img: "service2.png",
                        alt: 'service'
                    },
                    {
                        id: 3,
                        title: 'Planning', 
                        content:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
                        img: "service3.png",
                        alt: 'service'
                    },
                    {
                        id:4, 
                        title: 'Building', 
                        content:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
                        img: 'service4.png',
                        alt: 'service'
                    },
                    
                ],
            }
        },
    }
</script>

<style lang="scss">
    @import "./../../styles/style.scss";
    @import "./../../styles/header.scss";
    @import "./../../styles/home-content.scss";

</style>