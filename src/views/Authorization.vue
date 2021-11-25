<template>
  <div class="Authorization">
    <Header />
    <h1>Log in</h1>
    <h1>Sign Up</h1>
    <router-link to="/login">Log in</router-link>
    <router-link to="/sign-up">Sign Up</router-link>
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue'
export default {
  name: 'Authorization',
  components: {
    Header,
  },
}
</script>


<style lang="scss" scoped>
    @import "./../styles/style.scss";
</style>
