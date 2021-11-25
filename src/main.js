import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// v9 compat packages are API compatible with v8 code
import { initializeApp } from 'firebase/app';
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

export default getAuth(firebaseApp);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VAnimateCss);