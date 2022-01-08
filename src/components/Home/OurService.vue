<template>
    <div class="our-service">
        <h2>what we do</h2>
        <h1>Our Service</h1>
        <v-carousel :carousel_data="services" v-if="!mobileView"></v-carousel>
        <carousel :items-to-show="1" v-if="mobileView">
            <slide v-for="title in services" :key="title">
                <div class="block">
                    <div class="block__img">
                        <img class=" right" :src="require('../../assets/'+ title.img)" alt="furniture pic">
                        <p>{{title.title}}</p>
                    </div>
                    <div class="block__txt">
                        <p>{{title.content}}</p>
                    </div>
                </div>
            </slide>

            <template #addons>
            <navigation />
            <!-- <pagination /> -->
            </template>
        </carousel>
    </div>
</template>

<script>
import vCarousel from './comments/v-carousel'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
    export default {
        name: 'OurService',
        components: {
            vCarousel,
            Carousel,
            Slide,
            // Pagination,
            Navigation,
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
                mobileView: false,
            }
        },
        mounted() {
            this.handleView();
        },
        methods: {
            handleView() {
                if(window.innerWidth <= 1140){
                    this.mobileView = true;
                }else{
                    this.mobileView = false;
                }
                console.log('window size: ' + window.innerWidth);
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/header.scss";
    @import "./../../styles/home-content.scss";
    @import "./../../styles/adaptive/adaptive-home.scss";

</style>