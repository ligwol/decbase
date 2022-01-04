<template>
  <div class="home">
    <BHeader />
    <FormPost />
    <PostList />
    <Footer />
  </div>
</template>

<script>
import BHeader from '@/components/Blog/BHeader.vue'
import FormPost from '@/components/Blog/FormPost.vue'
import PostList from '@/components/Blog/PostList.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
  name: 'Blog',
  components: {
    BHeader, 
    FormPost,
    PostList,
    Footer,
  }
}
</script>