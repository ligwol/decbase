<template>
  <div class="posts">
      <div class="post" v-for="index in articleArray" :key="index">
          <br><br>
            {{index}}
      </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs} from "firebase/firestore"
export default {
    name: 'PostList',
    data() {
        return{
            articleArray: {
                title: [],
                content: [],
                image: [],
            },
            titleArray: [],
            contentArray: [],
            imageArray: [],
        }
    }, 
    beforeMount: function(){
        this.getArticles();
    },
    methods: {
        async getArticles() {
            const firestore = getFirestore();
            const querySnapshot = await getDocs(collection(firestore, "articles"));
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                this.titleArray.push(doc.data().title);
                //console.log('title: ' + this.titleArray);

                this.contentArray.push(doc.data().content);
                //console.log('content: ' + this.contentArray);

                this.imageArray.push(doc.data().image);
                //console.log('image: ' + this.imageArray);

                this.articleArray = this.titleArray.concat(this.contentArray.concat(this.imageArray));
                //console.log("MMMMMMMMMMMMMMM: ===>>" + this.articleArray);
                
                this.articleArray.title = this.titleArray;
                this.articleArray.content = this.contentArray;
                this.articleArray.image = this.imageArray;
            });
            
        },
    },

}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/blog.scss";
</style>