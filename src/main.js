import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios'

window.axios = require('axios');
var socket = io('http://localhost:5000');
export default socket;
Vue.use(Ionic);
Vue.config.productionTip = false
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
export const eventBus= new Vue();
new Vue({
  router,
  store,
  sockets: {
    testing() {
      console.log('Tested socket for client!')
    }
  },
  render: function (h) { return h(App) }
}).$mount('#app')
