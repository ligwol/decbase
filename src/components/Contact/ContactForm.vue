<template>
  <div class="contact-form">
      <div class="contact-form__intro">
          <h2> Let's get in touch </h2>
          <p>We're open for any suggestion or just to have chat</p>
      </div>
      <form v-on:submit.prevent="addNewMessage">
          <div class="contact-form__form">
            <input type="text" id="name" class="name" rows="1" v-model="name" placeholder="Full Name">
            <input type="email" id="email" class="email" rows="1" v-model="email" placeholder="Email">
            <Textarea type="text" id="message" v-model="message" :autoResize="false" class="message" rows="5" placeholder="Message"/>
          </div>
          <div class="contact-form__button">
              <Button label="Send Message" @click="addNewMessage" />
          </div>
      </form>
  </div>
</template>

<script>
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import { getFirestore, collection, addDoc } from "firebase/firestore"
export default {
    name: 'ContactForm',
    components: {
        Button, 
        Textarea,
    },
    data() {
        return{
            name: '',
            email: '',
            message: '',
        }
    }, 
    methods: {
        async addNewMessage(){
            let today = Date.now();
            const firestore = getFirestore();
            const messageDocs = collection(firestore, 'contactUs');
            const localName = this.name;          
            const localEmail = this.email;          
            const localMessage = this.message;       
            async function addNewDocument() {
                const newDoc = await addDoc(messageDocs, {
                    name: localName,
                    email: localEmail,
                    message: localMessage,
                    date: today,
                })
                console.log(`Doc created at + ${newDoc.path}`);
            }
            addNewDocument();
            this.name='';
            this.email='';
            this.message='';
        },
    }

}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/contact.scss";
    @import "./../../styles/adaptive/adaptive-contact.scss";
</style>