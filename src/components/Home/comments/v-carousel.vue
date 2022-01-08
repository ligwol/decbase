<template>
  <div class="wrapper">
    <div class="wrapper__nav">
        <button @click="prevSlide" v-bind:disabled="currentSlideIndex<=1" class="wrapper__prev">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button @click="nextSlide" v-bind:disabled="currentSlideIndex>=2" class="wrapper__next">
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>

    <!-- <div class="v-carousel" :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}"> -->
    <!-- :class="{active: currentSlideIndex === item.id}" -->
    <div class="v-carousel">
        <v-carousel-item
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
            :class="{active: currentSlideIndex !== item.id}"
        />
      </div>
  </div>
</template>

<script>
import vCarouselItem from './v-carousel-item'
export default {
    name: "v-carousel",
    components: {
        vCarouselItem,
    },
    data() {
        return{
            currentSlideIndex: 1,
            isHidden: true,
            mobileView: false,
        }
    },
    props: {
        carousel_data: {
            type: Array,
            default: () => []
        }
    },
    beforeMount: function(){
        this.handleView();
    },
    methods: {
        prevSlide() {
            this.currentSlideIndex-=3;
            console.log(this.currentSlideIndex);
        },
        nextSlide() {
            this.currentSlideIndex+=3;
            console.log(this.currentSlideIndex);
        },
        handleView() {
            if(window.innerWidth <= 1140){
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
    .wrapper{
        overflow: hidden;
        margin: 0 auto;
        max-width: 100vw;
        padding: 0 0 40px 0;
        .wrapper__nav{
            margin: 30px 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .wrapper__prev, .wrapper__next{
            margin: 0 30px 0 0;
            padding: 0;
            width: 30px;
            height: 30px;
            background-color: #fff;
            color: #646464;
            font-weight: 600;
            font-size: 16px;
            text-transform: capitalize;
            text-align: center;    
            border: none;
            border-radius: 100px;
            box-shadow: -1px 3px 10px rgba(0, 0, 0, 0.3);
            transition: 300ms ease;
            &:hover{
                background-color:  #37806B;
                i{
                    color: #fff;
                }
            }      
        }
        }
    }
    .v-carousel{
        display: flex;
        gap: 20px;
    }
</style>