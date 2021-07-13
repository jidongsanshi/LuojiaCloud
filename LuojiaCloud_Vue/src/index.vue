<template>
	<div id="all">
		<el-row>
			<el-col :span="20" :offset="2">
				<div id="meau">
					<el-menu :default-active="this.$router.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" router  >
						<img src="./img/珞珈云logo.png" align="right"/>
						<el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" >
						{{ item.navItem }}
						</el-menu-item>
					</el-menu>
				</div>
			</el-col>
		</el-row>
		<router-view></router-view>
	</div>
</template>

<script>

	export default {
		data() {
		  return {
			navList:[ 
			            {name:'/components/home',navItem:'站点主页'}, 
			            {name:'/components/aimarker',navItem:'算法商城'},
			            {name:'/components/onlinepractice',navItem:'在线训练'}, 
			            {name:'/components/ordermanager',navItem:'订单管理'}, 
			            {name:'/components/register',navItem:'注册'}, 
						{name:'/components/signin',navItem:'登录'}, 
			            ]
			
		  };
		},
	        methods: {
	          handleSelect(key, keyPath) {
	            console.log(key, keyPath);
	          }
	        }
	  }
</script>


<style>
/* #all{
	background-color: whitesmoke;
} */
</style>