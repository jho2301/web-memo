import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSyncAlt, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faSyncAlt, faTimes);
Vue.component('font-awsome', FontAwesomeIcon);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
