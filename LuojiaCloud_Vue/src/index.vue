<template>
	<div id="all" >
			  <el-row>
			  	<el-col :span="3" :offset="2">
					<img src="./img/珞珈云logo.png" align="center" />
				</el-col>
				<el-col :span="10" :offset="2">
					<div id="meau">
						<el-menu :default-active="this.$router.path" class="el-menu-demo" mode="horizontal"  router 
						  text-color="#999999"
						 >
							
							<el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name"  >
						&nbsp;&nbsp;{{ item.navItem }}&nbsp;&nbsp;
							</el-menu-item>
						</el-menu>
						
					</div>
				</el-col>
				<el-col :span="2" :offset="2">
					<div>
						<el-menu  class="el-menu-demo" mode="horizontal"  router 
						  text-color="#999999"
						 >
							
							<el-menu-item   >
						    登录测试
							</el-menu-item>
						</el-menu>
					</div>
				</el-col>	
				<el-col :span="1" >
			  		<div  class="block" ><el-avatar  :size="50" :src="circleUrl" ></el-avatar></div>
				</el-col>			
			  </el-row>	
					<div class="line"></div>
			  <router-view ></router-view>
<!-- 		{{account}} -->
	
	</div>
</template>

<script>
 import AImarket from './AImarket.vue'
	export default {
		data() {
		  return {
			 circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
			navList:this.COMMON.navList,
			account:this.COMMON.account
					
			
		  };
		},
	        methods: {
				usernameset:function(s){
					AImarket.data.test=s;
				},
			  setaccount:function(data){
				  this.account=data
			  }
	        }
	  }

</script>


<style>
#all{
background-color:;
}
</style>