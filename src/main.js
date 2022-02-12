import Vue from 'vue'
Vue.config.productionTip = false

import App from './App.vue'
import vuetify from './plugins/vuetify'

import * as olo from '@onlabsorg/olojs/browser';

olo.Viewer = (elt, store) => new Vue({
    
    vuetify,
    
    render: h => h(App, {
        props: {store}
    })
    
}).$mount(elt);

window.olo = olo;
export default olo.Viewer
