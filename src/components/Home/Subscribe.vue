<template>
  <div class="subscribe">
      <h1>
          DON’T FORGET TO SIGN UP
      </h1>
      <hr>
      <p>
          Find out early about all upcoming promotions and new product releases with our newsletter.
      </p>
      <div class="subscribe__field">
          <form v-on:submit.prevent="addNewEmail" class="subscribe__form">
              <input type="email" class="form__input" placeholder="Enter your email address..." v-model="email">
              <button class="form__button" @click="addNewEmail">Submit Query</button>
          </form>
      </div>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from "firebase/firestore"
export default {
    name: 'Subscribe',
    data() {
        return{
            email: '',
        }
    }, 
    methods: {
        async addNewEmail(){
            let today = Date.now();
            const firestore = getFirestore();
            const emailDocs = collection(firestore, 'userEmail');
            const localEmail = this.email;          
            async function addNewDocument() {
                const newDoc = await addDoc(emailDocs, {
                    email: localEmail,
                    date: today,
                })
                console.log(`Doc created at + ${newDoc.path}`);
            }
            addNewDocument();
            this.email='';
        },
    }
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/home-content.scss";
    @import "./../../styles/adaptive/adaptive-home.scss";

</style>