<template>
</template>

<script>
	const navList=[
	            {name:'/home',navItem:'站点主页'}, 
	            {name:'/aimarker',navItem:'算法商城'},
	            {name:'/onlinepractice',navItem:'在线训练'}, 
	            {name:'/ordermanager',navItem:'订单管理'}, 
	            {name:'/register',navItem:'注册'}, 
				{name:'/signin',navItem:'登录'}, 
	            ]
	var account="55566677"
	function getaccount(a){
		this.account=a
	}
	export default {
		account,
		navList,
		getaccount
	}
	
</script>

<style>
</style>
