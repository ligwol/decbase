<template>
  <HeaderAdmin />
  <div class="authorization">
    <div class="border-first authorization__form animation__slidein">
        <div class="border-second">
        <div class="form__block">
          <p>
            Welcome, {{user.displayName}}
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
                        :value="user.email"
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
import HeaderAdmin from '@/components/Admin/HeaderAdmin.vue';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import {} from 'firebase/firestore';
export default {
    name: 'Account',
    components: {
        HeaderAdmin,
    },
    data() {
        return {
            user: null,
        }
    },
    created() {
        const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                this.user = user;
            } else {
                this.user = null;
                this.$router.push('/login'); 
            }
            });
    },
    methods: {
        async logOut(){
        console.log("LOG OUT WORK");
        const auth = getAuth();
        signOut(auth)
                .then(() => {
                    console.log("log in success");
                    onAuthStateChanged(auth, ()  => {
                        this.$router.push('/login'); 
                        console.log("log in is okay");
                    });
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

<style lang="scss" scoped>
@import "./../../styles/authorization.scss";
@import "./../../styles/adaptive/adaptive-auth.scss";
</style>