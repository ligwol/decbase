import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import FileUpload from 'primevue/fileupload';
import TextArea from 'primevue/textarea';


const app = createApp(App);
// v9 compat packages are API compatible with v8 code
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import {getAuth} from 'firebase/auth';

import VAnimateCss from 'v-animate-css';
import { VueWindowSizePlugin } from 'vue-window-size/option-api';

import Vue from 'vue'
import VueMeta from 'vue-meta'
import VuePageTitle from 'vue-page-title'
import './styles/style.scss'

createApp(App).use(router).mount('#app')

Vue.use(VuePageTitle, {
  // prefix: 'My App - ',
  suffix: '- My App '
})

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
app.component('Dialog', Dialog);
app.component('FileUpload', FileUpload);
app.component('TextArea', TextArea);

app.use(VueWindowSizePlugin);

Vue.use(VueMeta)