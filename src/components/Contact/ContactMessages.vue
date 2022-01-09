<template>
  <div class="contact-messages">
      <div class="messages">
        <div class="message" v-for="name, index in contactArray.name" :key="index">
            <div class="message__info">
                <h2>
                    {{contactArray.name[index]}}
                </h2>
                <div class="message__email">
                    {{contactArray.email[index]}}
                </div>
                <div class="message__text">
                    {{contactArray.message[index]}}
                </div>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, query, orderBy} from "firebase/firestore"
export default {
    name: 'ContactMessages',
    data() {
        return{
            contactArray: {
                name: [],
                email: [],
                message: [],
            },
            nameArray: [],
            emailArray: [],
            messageArray: [],
        }
    }, 
    beforeMount: function(){
        this.getArticles();
    },
    methods: {
        async getArticles() {
            const firestore = getFirestore();
            const messageRef = collection(firestore, "contactUs");
            const q = query(messageRef, orderBy("date", "desc"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                this.nameArray.push(doc.data().name);
                this.emailArray.push(doc.data().email);
                this.messageArray.push(doc.data().message);
                this.contactArray = this.nameArray.concat(this.emailArray.concat(this.messageArray));
                this.contactArray.name = this.nameArray;
                this.contactArray.email = this.emailArray;
                this.contactArray.message = this.messageArray;
            });
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "./../../styles/contact.scss";
    @import "./../../styles/adaptive/adaptive-contact.scss";
</style>