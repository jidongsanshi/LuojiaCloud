<template>
	<div id="all">
		<el-row>
			<el-col :span="3" :offset="2">
				<img src="./img/珞珈云logo.png" align="center" />
			</el-col>
			<el-col :span="8" :offset="3">
				<div id="meau">
					<el-menu :default-active="this.$router.path" class="el-menu-demo" mode="horizontal" router
						text-color="darkgray">

						<el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
							&nbsp;&nbsp;{{ item.navItem }}&nbsp;&nbsp;
						</el-menu-item>
					</el-menu>

				</div>
			</el-col>
			<el-col :span="3" :offset="3">
				<div>
					<el-menu :default-active="this.$router.path" class="el-menu-demo" mode="horizontal" router
						text-color="darkgray">
						<el-submenu index="2">
						    <template slot="title"><el-avatar :size="35" :src="circleUrl"></el-avatar>{{userName}}</template>
						    <el-menu-item index="/signin" v-if="judge2()">登录</el-menu-item>
							<el-menu-item index="/personal" v-if="!judge2()">个人中心</el-menu-item>
							<el-menu-item @click="clear()" v-if="!judge2()" >退出登录</el-menu-item>
						  </el-submenu>
					</el-menu>
				</div>
			</el-col>
		</el-row>
		<router-view 
		@userSignIn="userSignIn"
		></router-view>
				

	</div>
</template>

<script>
	import AImarket from './AImarket.vue'
	export default {
		data() {
			return {
				circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				navList: this.COMMON.navList,
				account: localStorage.account,
				userName: localStorage.userName,
				ifsignin:localStorage.ifsignin
				// isRouterAlive: true

			};
		},
		methods: {
			judge2:function(){
				if(this.ifsignin=="signin"){
					return true
				}
				else{
					return false
				}
				
			},
			setaccount: function(data) {
				this.account = data
			},
			userSignIn(userName,useraccount){
			      localStorage.userName = userName;
			      this.userName = localStorage.userName;
				  localStorage.account=useraccount;
				  this.account=localStorage.account;
				  localStorage.ifsignin="notsign"
				  this.ifsignin=localStorage.ifsignin
			    },
				clear:function(){
					localStorage.clear()
					// this.open1()
					this.$router.push('/home')
					window.location.reload()
				},
				judge:function(){
					if(this.ifsignin==null){
						this.ifsignin="signin"
				}
				}
			// reload () {
			//      this.isRouterAlive = false
			//      this.$nextTick(() => (this.isRouterAlive = true))
			//    }   	
		},		
		mounted: function() {
			this.judge()
		}
	}
</script>


<style>
	.el-menu--horizontal > .el-menu-item.is-active {
	  border-bottom: none;
	}
	.el-menu--horizontal > .el-menu-item {

	  border-bottom: none;
	  text-align: center;
	}
</style>
