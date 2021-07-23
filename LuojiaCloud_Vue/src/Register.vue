<template>
	<div id="register">
		<div id="background">
			<br>
			<span class="rhead" >珞珈云注册</span>
			
			<el-divider></el-divider>
			<div id="rinput">
				<el-input
				  placeholder="请输入手机号"
				  v-model="account"
				  clearable
				  @blur="accounttest()">
				</el-input>
				<p class="alert">{{accountalert}}</p>
				<br><br>
				<el-input
				  placeholder="用户名"
				  v-model="username"
				  clearable
				  @blur="nametest()"
				  >  
				</el-input>
				  <p class="alert">{{usernamealert}}</p>
				  <br><br>
				<el-input placeholder="请输入密码" v-model="password1" show-password @blur="password1test()"></el-input>
				<p class="alert">{{password1alert}}</p>
				<br><br>
				<el-input placeholder="请确认密码" v-model="password2" show-password @blur="password2test()"></el-input>
				<p class="alert">{{password2alert}}</p>
				<br><br>
				<el-button :disabled="buttonstatus" @click="register()">注册</el-button>
				<br><br>
				<span class="notice" >已有账号,<router-link to="/signin">登录</router-link></span>
			</div>
			
			
		</div>		
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
			open1() {
			        this.$notify({
			          message: '注册成功',
					  type:'success'
			        });
			      },
			open4() {
			       this.$notify.error({
			         message: '账号已存在',
			       });
			      },	
			buttonstatustest:function(){
				if(this.accountright&&this.usernameright&&this.password1right&&this.password2right){
						this.buttonstatus=false
				}
				else{
					this.buttonstatus=true
				}
			},
			nametest:function(){
				if (this.username.length>8){
					this.usernamealert="用户名长度不得超过8位"
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
				if(this.password1.length<6||this.password1.length>16){
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
			var that=this
				console.log("注册")
				axios.get("http://1.116.236.191:8701/json/register?account="+this.account+"&name="+this.username+"&password="+this.password2).then(function(response){
				console.log(response)
				if(response.data.isright){
					that.open4()
				}
				else{
					that.open1()
					that.$router.push('/signin')
				}
				})
				.catch(function(err){
					console.log(err)
				})
			}
	  }
}
</script>

<style>
	#register{
		background-color: whitesmoke;
		height: 67.5rem;
	}
	#rinput{
		margin:0 auto;
		 text-align:center;
		width: 400px;
		height: 600px;
	}
#background{
	margin:0 auto;
 	 text-align:center; 
	width: 900px;
	height: 800px;
	background-color: white;
	}
	
.alert{
	font-size: small;
	color: #F56C6C;
	text-align: left;
}
.rhead{
	font-size: larger;	
}
.notice{
}
</style>
