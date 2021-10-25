<template>
  <div class="blog">
      <h2>
          TESTIMONIALS
      </h2>
      <h1>
          Client says about us
      </h1>
      <carouselComments
        :carousel_data="comments"
      />
  </div>
</template>

<script>
import carouselComments from './comments/carouselComments.vue'
export default {
    name: 'Comments',
    components: { 
        carouselComments,
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
            }
        },

}
</script>

<style>
    @import "./../../styles/style.scss";
    @import "./../../styles/home-content.scss";
</style>