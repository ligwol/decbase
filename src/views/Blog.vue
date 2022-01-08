<template>
  <div class="home">
    <Header />
    <PostList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue'
import PostList from '@/components/Blog/PostList.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
  name: 'Blog',
  components: {
    Header,
    PostList,
    Footer,
  }
}
</script>