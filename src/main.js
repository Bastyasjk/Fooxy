import Vue from 'vue';
import VueFirestore from 'vue-firestore';
import { fb } from './firebase';
import App from './App.vue';
import router from './router';
import store from './store';

require('firebase/firestore');

Vue.use(VueFirestore, {
  key: 'id', // the name of the property. Default is '.key'.
  enumerable: true, // whether it is enumerable or not. Default is true.
});
Vue.use(VueFirestore);
Vue.config.productionTip = false;

fb.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');
