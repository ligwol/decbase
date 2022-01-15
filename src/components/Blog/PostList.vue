<template>
    <div class="posts">
        <div class="post" v-for="title, index in articleArray.title" :key="index">
            
            <div class="post__image">
                <img class=" right" :src="articleArray.image[index]" alt="furniture pic">
            </div>
            <div class="post__content">
                <h2>
                    {{articleArray.title[index]}}
                </h2>
                <div class="post__text">
                    {{articleArray.content[index]}}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { getFirestore, collection, getDocs, query, orderBy} from "firebase/firestore"
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
            const articleRef = collection(firestore, "articles");
            const q = query(articleRef, orderBy("date", "desc"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                this.titleArray.push(doc.data().title);
                this.contentArray.push(doc.data().content);
                this.imageArray.push(doc.data().image);
                this.articleArray = this.titleArray.concat(this.contentArray.concat(this.imageArray));
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
    @import "./../../styles/adaptive/adaptive-blog.scss";
</style>