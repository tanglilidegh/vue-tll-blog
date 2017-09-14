import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
