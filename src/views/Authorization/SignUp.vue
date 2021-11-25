<template>
  <div class="authorization">
    <AHeader />
    <div class="animation__form-slidein authorization__form">
      <div class="border-first">
        <div class="border-second">
        <div class="form__block">
          <p>
            Already have an account? 
            <router-link to="/login">Login</router-link>
          </p>
          <h1>
            Create Your Decbase Account
          </h1>
          <form @submit.prevent="registr">
            <div class="inputs">
              <div class="input user">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" v-model="username">
              </div>
              <div class="input email">
                <i class="fas fa-at"></i>
                <input type="email" placeholder="Email" v-model="email">
              </div>
              <div class="input password">
                <i class="fas fa-key"></i>
                <input type="password" placeholder="password" v-model="password">
              </div>
            </div>
            <button type="submit" @click="register"> Sign In </button>
          </form>
        </div>
      </div>
      </div>
      
    </div>
    <div class="images">
      <img class="animation__slidein" src="../../assets/sign-up-bg.jpg">
    </div>
  </div>
</template>

<script>
import 'animate.css';
import "firebase/auth"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AHeader from '@/components/Authorization/AHeader.vue'

export default {
  name: 'SignUp',
  components: {
    AHeader,
  },
  data() {
    return{
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async register(){
      console.log("WORK");
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
              .then(() => {
                console.log("success")
              })
              .catch(err => {
                console.log("FAIL GIRL");
                console.error(err)
              })

    }
  }
}
</script>

<style lang="scss">

  @import "./../../styles/authorization.scss";

  .animation__image1 {
    animation: fadeInRight;
    animation-duration: 2s;
    z-index: 1;
    height: 100vh;
    width: auto;
  }
  .animation__form-slidein {
    animation: fadeInRight;
    animation-duration: 2.5s;
    z-index: 2;
    height: 100vh;
    width: auto;
  }
  .animation__img-slidein {
    animation: fadeInRight;
    animation-duration: 2s;
    z-index: 2;
    height: 100vh;
    width: auto;
  }

</style>