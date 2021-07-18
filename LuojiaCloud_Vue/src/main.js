import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import index from './index.vue'
import router from './router/index.js'
import VueRouter from 'vue-router'
import axios from 'axios'
import global from './common.vue'
Vue.prototype.COMMON = global
Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
	router,
  render: h => h(index)
}).$mount("#app")