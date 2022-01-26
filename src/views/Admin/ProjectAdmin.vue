<template>
  <div class="home">
    <HeaderAdmin/>
    <ProjectContent />
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import HeaderAdmin from '@/components/Admin/HeaderAdmin.vue'
import ProjectContent from '@/components/Project/ProjectContent.vue'
import Subscribe from '@/components/Home/Subscribe.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
  name: 'Project',
  components: {
    HeaderAdmin,
    ProjectContent,
    Subscribe,
    Footer,
  }, 
  mounted(){
        document.title = "Project | Decbase"
    }
}
</script>
