<template>
  <div class="home">
    <Header/>
    <ProjectContent />
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue'
import ProjectContent from '@/components/Project/ProjectContent.vue'
import Subscribe from '@/components/Home/Subscribe.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
  name: 'Project',
  components: {
    Header,
    ProjectContent,
    Subscribe,
    Footer,
  }, 
}
</script>
