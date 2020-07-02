import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

// import VueSocketIOExt  from 'vue-socket.io-extended';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000')
// Vue.use(VueSocketIOExt, socket);
var socket = io('http://localhost:5000');
export default socket;
Vue.use(Ionic);
Vue.config.productionTip = false
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

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
