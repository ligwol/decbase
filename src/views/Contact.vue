<template>
  <Header/>
  <ContactForm/>
  <ContactInfo/>
  <Footer/>
</template>

<script>
import Header from '@/components/Home/Header.vue'
import ContactForm from '@/components/Contact/ContactForm.vue'
import ContactInfo from '@/components/Contact/ContactInfo.vue'
import Footer from '@/components/Home/Footer.vue'
export default {
  name: 'Contact',
  components: {
    Header,
    ContactForm,
    ContactInfo, 
    Footer,
  }
}
</script>

<style>

</style>