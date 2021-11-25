<template>
  <div class="authorization">
      <AHeader />
    <div class="border-first authorization__form animation__slidein">
        <div class="border-second">
        <div class="form__block">
          <p>
            Welcome, Username
          </p>
          <h1>
            Create Your Decbase Account
          </h1>
          <form @submit.prevent="registr">
            <div class="inputs">
              <div class="input email">
                <i class="fas fa-at"></i>
                <input 
                        type="email" 
                        placeholder="Email"
                        readonly
                        value="username@domain.com"
                >
              </div>
            </div>
            <button type="submit" @click="logOut"> 
                <i class="fas fa-sign-out-alt"></i>
                Log out 
            </button>
          </form>
        </div>
      </div>      
    </div>
    <div class="images">
      <img class="animation__imgFade" src="../../assets/reset-password-bg.jpg">
    </div>
  </div>
</template>

<script>
import AHeader from '@/components/Authorization/AHeader.vue';
import { getAuth, signOut } from "firebase/auth";
export default {
    name: 'Account',
    components: {
        AHeader,
    },
    data() {
        return {
            user: null
        }
    },
    methods: {
        async logOut(){
        console.log("LOG OUT WORK");
        const auth = getAuth();
        signOut(auth)
                .then(() => {
                    console.log("success");
                    this.$router.push('/login');
                })
                .catch(err => {
                    console.log("FAIL TO LOG OUT GIRL");
                    this.error = true,
                    this.errorMsg = err.message,
                    console.error(err)
                })
        }
    }
}
</script>

<style lang="scss">
@import "./../../styles/authorization.scss";
</style>