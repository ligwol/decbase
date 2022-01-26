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
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'Blog',
  components: {
    HeaderAdmin, 
    FormPost,
    PostList,
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
          document.title = "Blog | Decbase"
      }
}
</script>