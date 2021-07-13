import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import home from './components/home.vue'
import signin from './components/Signin.vue'
import index from './index.vue'
import router from './router/index.js'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
	router,
  render: h => h(index)
}).$mount("#app")