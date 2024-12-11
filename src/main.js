import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import legoRedPlugin from '../plugin/plugin.js'

import config from './init/global'
const packageJson = require('../package.json')

Vue.use(legoRedPlugin, { config, packageJson })

import './styles/_styles.sass'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
