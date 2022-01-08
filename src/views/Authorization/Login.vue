<template>
    
  <div class="authorization">
    <div class="authorization__form">
      <AHeader />
      <div class="border-first authorization__form animation__slidein">
        <div class="border-second">
        <div class="form__block">
          <p>
            Dont have an account? 
            <router-link to="/sign-up">Sign Up</router-link>
          </p>
          <h1>
            Login To Your Decbase Account
          </h1>
          <form @submit.prevent="login">
            <div class="inputs">
              <div class="input email">
                <i class="fas fa-at"></i>
                <input type="email" placeholder="Email" v-model="email" class="top-input">
              </div>
              <div class="input password">
                <i class="fas fa-key"></i>
                <input type="password" placeholder="Password" v-model="password">
              </div>
            </div>
            <!-- <div v-if="error" class="alert">
              {{errorMsg}}
              ERROR
            </div> -->
            <button type="submit" @click="login"> Sign In </button>
          </form>
          <ErrorMessage 
                :message="msgError" 
                :isError="isError"
                @hide = "hideError"
                />
          <p>
            Forgot the password? 
            <router-link to="/reset-password">Click here</router-link>
          </p>
        </div>
      </div>
      </div>
      
    </div>
    <div class="images">
      <img class="animation__imgFade" src="../../assets/login-bg.jpg">
    </div>
  </div>
</template>

<script>
import 'animate.css';
import "firebase/auth"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AHeader from '@/components/Authorization/AHeader.vue'
import ErrorMessage from '@/components/Authorization/ErrorMessage.vue'
export default {
  name: 'Login',
  components: {
    AHeader,
    ErrorMessage,
  },
  data() {
    return{
      email: '',
      password: '',
      isError: false,
      msgError: 'Error'

    }
  }, 
  methods: {
    async login(){
      console.log("LOGIN WORK");
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
              .then(() => {
                  console.log("success");
                  this.$router.push('/account');
              })
              .catch(err => {
                console.log("FAIL TO LOGIN GIRL");
                this.isError = true,
                this.msgError = err.message,
                console.error(err)
              })
    },
  }

}
</script>

<style lang="scss" scoped>
@import "./../../styles/authorization.scss";
@import "./../../styles/adaptive/adaptive-auth.scss";
.animation__slidein {
  animation: fadeInDownBig;
  animation-duration: 2.5s; 
  z-index: 1;
  height: 100vh;
  width: auto;
}
.animation__imgFade {
  /* display: inline-block;
  margin: 0 0.5rem; */
  animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
  z-index: 2;
  height: 100vh;
  width: auto;
}

</style>