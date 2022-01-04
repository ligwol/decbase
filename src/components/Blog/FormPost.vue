<template>
    <form @submit.prevent="addNewPost" class="form-post">
        <div class="form-post__form">
            <input id="new-title" rows="1" v-model="newTitle" placeholder="Title"/>
            <input id="new-post" rows="7" v-model="newContent" placeholder="Tell us latest news"/>
            <input id="new-photo" rows="1" v-model="newPhoto" placeholder="Photo"/>
            <!-- <FileUpload name="demo[]" url="./upload" :multiple="true" /> -->
        </div>
        <div class="form-post__button">
            <Button label="Create" @click="addNewPost" />
            <!-- <Button label="GetInfo" @click="getArticle" /> -->
        </div>
    </form>
    
    <div class="posts">
        <h1>{{articleTitle}}</h1>
    </div>
</template>

<script>
import Button from 'primevue/button';
//import Textarea from 'primevue/textarea';
//import FileUpload from 'primevue/fileupload';
import { getFirestore, collection, addDoc, } from "firebase/firestore"

export default {
    name: 'FormPost',
    components: {
        Button,
        //FileUpload,
        //Textarea,
    },
    data() {
        return{
            articleTitle: '',
            counter: 0,
            marker: true,
            newTitle: '',
            newContent: '',
            newPhoto: '',
        }
    },
    methods: {
        async addNewPost(){
            console.log('Title: ' + this.newTitle);
            console.log('Content: ' + this.newContent);
            const firestore = getFirestore();
            const articlesDocs = collection(firestore, 'articles');
            const localTitle = this.newTitle;
            const localContent = this.newContent;
            const localPhoto = this.newPhoto;           
            async function addNewDocument() {
                const newDoc = await addDoc(articlesDocs, {
                    //title: 'this.newTitle',
                    // content: 'this.newPost',
                    // image: 'this.newPhoto',
                    title: localTitle,
                    content: localContent,
                    image: localPhoto,
                })
                console.log(`Doc created at + ${newDoc.path}`);
            }
            // async function readASingleDocument(){
            //     const mySnapshot = await getDocs(articlesDocs);
            //     if (mySnapshot.exists()) {
            //         const docData = mySnapshot.data();
            //         console.log(`My data is${JSON.stringify(docData)}`);
            //     }
            // }
            addNewDocument();
            // readASingleDocument();
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/blog.scss";
</style>