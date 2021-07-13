import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import signin from '../components/Signin.vue'
import index from '../index.vue'
import ordermanager from '../components/OrderManager.vue'
import aimarker from '../components/AImarket.vue'
import onlinepractice from '../components/onlinepractice.vue'
import register from '../components/Register.vue'
Vue.use(Router)

export default new Router({
	 mode:"history",
  routes: [
    {
      path: '*',
      redirect:'/components/home'
    },
     {
      path: '/components/home',
      name: 'home',
      component:home
    },
	{
	  path: '/components/signin',
	  name: 'signin',
	  component:signin
	},
	{
	  path: '/components/register',
	  name: 'register',
	  component:register
	},
	{
	  path: '/components/ordermanager',
	  name: 'ordermanager',
	  component:ordermanager
	},
	{
	  path: '/components/aimarker',
	  name: 'ordermanager',
	  component:ordermanager
	},
	{
	  path: '/components/onlinepractice',
	  name: 'onlinepractice',
	  component:onlinepractice
	}
	
	]
})