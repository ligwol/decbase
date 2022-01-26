<template>
  <HeaderAdmin/>
  <ContactMessages/>
  <Footer/>
</template>

<script>
import HeaderAdmin from '@/components/Admin/HeaderAdmin.vue'
import ContactMessages from '@/components/Contact/ContactMessages.vue'
import Footer from '@/components/Home/Footer.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'Contact',
  components: {
    HeaderAdmin,
    ContactMessages,
    Footer,
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
    mounted(){
          document.title = "Contacts | Decbase"
      }
}
</script>

<style>

</style>