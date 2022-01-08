<template>
  <div class="home">
    <HeaderAdmin />
    <FormPost />
    <PostList />
    <Footer />
  </div>
</template>

<script>
import HeaderAdmin from '@/components/Admin/HeaderAdmin.vue'
import FormPost from '@/components/Blog/FormPost.vue'
import PostList from '@/components/Blog/PostList.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
  name: 'Blog',
  components: {
    HeaderAdmin, 
    FormPost,
    PostList,
    Footer,
  }
}
</script>