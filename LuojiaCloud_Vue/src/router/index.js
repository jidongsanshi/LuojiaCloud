import Vue from 'vue'
import Router from 'vue-router'
import home from '../home.vue'
import signin from '../Signin.vue'
import ordermanager from '../OrderManager.vue'
import aimarker from '../AImarket.vue'
import onlinepractice from '../onlinepractice.vue'
import register from '../Register.vue'
import personal from '../personal.vue'
Vue.use(Router)

export default new Router({
	 // mode:"history",
  routes: [
    {
      path: '*',
      redirect:'/home'
    },
     {
      path: '/home',
      name: 'home',
      component:home
    },
	{
	  path: '/signin',
	  name: 'signin',
	  component:signin
	},
	{
	  path: '/register',
	  name: 'register',
	  component:register
	},
	{
	  path: '/ordermanager',
	  name: 'ordermanager',
	  component:ordermanager
	},
	{
	  path: '/aimarker',
	  name: 'aimarker',
	  component:aimarker
	},
	{
	  path: '/onlinepractice',
	  name: 'onlinepractice',
	  component:onlinepractice
	},
	{
	  path: '/personal',
	  name: 'personal',
	  component:personal
	}
	
	]
})