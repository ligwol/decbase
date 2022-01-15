<template>
    <form @submit="addNewPost" class="form-post">
        <div class="form-post__form">
            <input id="new-title" rows="1" v-model="newTitle" placeholder="Title"/>
            <!-- <input id="new-post" rows="7" v-model="newContent" placeholder="Tell us latest news"/> -->
            <Textarea id="new-post" v-model="newContent" :autoResize="true" rows="4" placeholder="Tell us latest news"/>
            <input id="new-photo" rows="1" v-model="newPhoto" placeholder="Image.jpg"/>
            <!-- <input id="new-photo" rows="1" v-model="newPhoto" placeholder="Image.jpg"/> -->
        </div>
        <div class="form-post__button">
            <Button label="Create" @click="addNewPost" />
        </div>
    </form>
    
    <div class="posts">
        <h1>{{articleTitle}}</h1>
    </div>
</template>

<script>
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
// import FileUpload from 'primevue/fileupload';
// import Dialog from 'primevue/dialog/sfc';
import { getFirestore, collection, addDoc } from "firebase/firestore"

export default {
    name: 'FormPost',
    components: {
        Button,
        // Dialog,
        // FileUpload,
        Textarea,
    },
    data() {
        return{
            articleTitle: '',
            counter: 0,
            marker: true,
            newTitle: '',
            newContent: '',
            newPhoto: '',
            date: '',
        }
    },
    methods: {
        async addNewPost(){
            let today = Date.now();
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
                    date: today,
                })
                console.log(`Doc created at + ${newDoc.path}`);
                window.location.reload();
            }
            addNewDocument();
            // readASingleDocument();
        },
    }
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/style.scss";
    @import "./../../styles/blog.scss";
    @import "./../../styles/adaptive/adaptive-blog.scss";
</style>