<template>
	<div>
		<el-input
		  placeholder="请输入手机号"
		  v-model="account"
		  clearable
		  @blur="accounttest()">
		</el-input>
		<p>{{accountalert}}</p>
		<el-input
		  placeholder="用户名"
		  v-model="username"
		  clearable
		  @blur="nametest()"
		  >  
		</el-input>
		  <p>{{usernamealert}}</p>
		<el-input placeholder="请输入密码" v-model="password1" show-password @blur="password1test()"></el-input>
		<p>{{password1alert}}</p>
		<el-input placeholder="请确认密码" v-model="password2" show-password @blur="password2test()"></el-input>
		<p>{{password2alert}}</p>
		<el-button :disabled="buttonstatus" @click="register()">注册</el-button>
		
		
	</div>
	
</template>

<script>
	import axios from 'axios'
	export default {
		
	    data() {
	      return {
	        account: '',
			accountalert: '',
			username: '',
			usernamealert:'',
			password1: '',
			password2: '',
			password1alert: '',
			password2alert: '',
			buttonstatus:true,
			accountright:false,
			usernameright:false,
			password1right:false,
			password2right:false
			
	      }
	    },
		methods:{
			buttonstatustest:function(){
				if(this.accountright&&this.usernameright&&this.password1right&&this.password2right){
						this.buttonstatus=false
				}
				else{
					this.buttonstatus=true
				}
			},
			nametest:function(){
				if (this.username.length>16){
					this.usernamealert="用户名长度不得超过16位"
					this.usernameright=false
				}
				else{
					this.usernamealert=""
					this.usernameright=true
				}
				this.buttonstatustest()
			},
			accounttest:function(){
				if(this.account.length==11&&(!isNaN(this.account))){
					this.accountalert=""
					this.accountright=true
				}
				else{
					this.accountalert="请输入正确的手机号"
					this.accountright=false
					}
				this.buttonstatustest()
							
			},
			password1test:function(){
				if(this.password1.length<6&&this.password1.length>16){
					this.password1alert="请输入6-16的密码"
					this.password1right=false
				}
				else{
					this.password1alert=''
					this.password1right=true
				}
				this.buttonstatustest()
			},
			password2test:function(){
				if(this.password1!=this.password2){
					this.password2alert="两次输入的密码不一致"
					this.password2right=false
				}
				else{
					this.password2alert=''
					this.password2right=true
				}
				this.buttonstatustest()
			},
			register:function(){//请求登录
				console.log("注册")
				axios.get("../json/register?account="+this.account+"&name="+this.username+"&password"+this.password2).then(function(response){
				console.log(response)
				})
				.catch(function(err){
					console.log(err)
				})
			}
	  }
}
</script>

<style>
</style>
