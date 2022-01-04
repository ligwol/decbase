import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import FileUpload from 'primevue/fileupload';
import TextArea from 'primevue/textarea';


const app = createApp(App);
// v9 compat packages are API compatible with v8 code
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import {getAuth} from 'firebase/auth';
import Vue from 'vue'; 

import VAnimateCss from 'v-animate-css';

createApp(App).use(router).mount('#app')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChdamvndpTsI7NEDn1T7CLorzo0Y0eoPA",
  authDomain: "decbase-3f777.firebaseapp.com",
  projectId: "decbase-3f777",
  storageBucket: "decbase-3f777.appspot.com",
  messagingSenderId: "59146219924",
  appId: "1:59146219924:web:55eaa66985d814542e9f81"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export default getAuth(firebaseApp, db);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VAnimateCss);

app.use(PrimeVue);
app.component('FileUpload', FileUpload);
app.component('TextArea', TextArea);
