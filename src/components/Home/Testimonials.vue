<template>
  <div class="testimonials">
      <h2>
          TESTIMONIALS
      </h2>
      <h1>
          Client says about us
      </h1>
      <carouselComments
        :carousel_data="comments"
        v-if="!mobileView"
      />

      <carousel :items-to-show="1" v-if="mobileView">
            <slide v-for="title in comments" :key="title">
                <div class="block">
                    <div class="block__img">
                        <img class=" right" :src="require('../../assets/'+ title.img)" alt="furniture pic">
                        
                    </div>
                    <div class="block__txt">
                        <div class="block__position">
                            <p><b>{{title.name}}</b></p>
                            <p>{{title.position}}</p>
                        </div>
                        <p>{{title.comment}}</p>
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
import carouselComments from './comments/carouselComments.vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
    name: 'Testimonials',
    components: { 
        carouselComments,
        Carousel,
        Slide,
        // Pagination,
        Navigation,
        },
        data() {
            return {
                comments: [
                    {
                        id:1, 
                        name: 'Louis Saville', 
                        position:'/CEO at Google inc', 
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        img: 'profile_1.png',
                        alt: 'photo',
                    },
                    {
                        id: 2,
                        name: 'Ashwin Gibbons', 
                        position:'/Manager at Nike inc', 
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        img: 'profile_2.png',
                        alt: 'photo',
                    },
                    {
                        id: 3,
                        name: 'Rekha Varadwaz', 
                        position:'/Manager at Nike inc', 
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        img: 'profile_3.png',
                        alt: 'photo',
                    },  
                    {
                        id: 4,
                        name: 'Margie Merritt', 
                        position:'/Manager at Nike inc', 
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        img: 'profile_4.png',
                        alt: 'photo',
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
    @import "./../../styles/home-content.scss";
    @import "./../../styles/adaptive/adaptive-home.scss";
</style>