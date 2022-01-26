<template>
  <AHeaderMobile v-if="!isHidden" />
  <div class="authorization__header">
    <div class="authorization__header__links" v-if="!mobileView">
      <router-link class="authorization__header__link" to="/"> Home </router-link>
      <!-- <router-link class="authorization__header__link" to="/Project"> Project </router-link>
      <router-link class="authorization__header__link" to="/services"> services </router-link>
      <router-link class="authorization__header__link" to="/Blog"> blog </router-link>
      <router-link class="authorization__header__link" to="/Shop"> shop </router-link> -->
    </div>
    <div class="header__click-button" v-if="mobileView" v-on:click="toggleANav">
      <!-- <i class="fas fa-ellipsis-v"></i> -->
      <router-link class="authorization__header__link" to="/"> Home </router-link>
    </div>
  </div>

</template>

<script>
import AHeaderMobile  from './AHeaderMobile.vue'
export default {
    name: 'AHeader',
    components: {
      AHeaderMobile,
    },
    data: function(){
        return{
            isHidden: true,
            showNav: false,
            mobileView: false,
        }
    },
    mounted() {
        this.myEventHandler();
        window.addEventListener("resize", this.myEventHandler);
    },
    unmounted() {
        window.removeEventListener("resize", this.myEventHandler);
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
        myEventHandler() {
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
@import "./../../styles/authorization.scss";
@import "./../../styles/adaptive/adaptive-auth.scss";

</style>