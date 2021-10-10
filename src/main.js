import Vue from 'vue'
Vue.config.productionTip = false

import App from './App.vue'
import vuetify from './plugins/vuetify'

import * as olo from '@onlabsorg/olojs/browser';
window.olo = olo;

olo.Viewer = (elt, homeStore) => {
    Vue.prototype.$store = new olo.Hub(homeStore);
    new Vue({
      vuetify,
      render: h => h(App)
  }).$mount(elt)    
}

