<template>
  <div class="authorization">
    <div class="border-first authorization__form animation__slidein">
        <div class="border-second">
        <div class="form__block">
          <p>
            ALready have an account? 
            <router-link to="/login">Login</router-link>
          </p>
          <h1>
            Create Your Decbase Account
          </h1>
          <form @submit.prevent="registr">
            <div class="inputs">
              <div class="input email">
                <i class="fas fa-at"></i>
                <input type="email" placeholder="Email" v-model="email">
              </div>
            </div>
            <button type="submit" @click="resetPassword"> 
              <i class="fas fa-undo"></i>
              Reset 
            </button>
          </form>
          <ErrorMessage 
                :message="msgError" 
                :isError="isError"
                @hide = "hideError"
                />
        </div>
      </div>      
    </div>
    <div class="images">
      <img class="animation__imgFade" src="../../assets/reset-password-bg.jpg">
    </div>
  </div>
</template>

<script>
import ErrorMessage from '@/components/Authorization/ErrorMessage.vue'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
    name: 'ResetPassword',
    components: {
      ErrorMessage,
    },
    data() {
    return{
      email: '',
      isError: false,
      msgError: 'Error'
    }
  },
  methods: { 
    resetPassword() {
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
      .then(() => {
        console.log("reset was sent")
        this.email='';
      })
      .catch((err) => {
        this.isError = true;
        this.msgError = err.message;
        console.log("FAIL TO LOGIN GIRL" +    err);
      });
    }
  } 
}
</script>

<style lang="scss">
@import "./../../styles/authorization.scss";
.animation__slidein {
  animation: fadeInDownBig;
  animation-duration: 2s; 
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