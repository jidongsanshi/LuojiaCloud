
<template>
	<div>
		<img src="./img/IMG_20210706_101340.jpg">
		<div id="container" ><br><br>
			<div id="title">登录到珞珈云<br><br></div>
			<div class="sinput">
			<el-input placeholder="请输入用户名" v-model="account" clearable></el-input>
			<p></p>
			<el-input placeholder="请输入密码" v-model="password" show-password></el-input>
			<p></p>
			<el-button type="primary" plain @click="sign()">登录</el-button>	
			</div>
			<div id="sregister">
				<br>
				<span>还没有账号，</span>
				<router-link to="/register">注册一个</router-link>
				<span>&nbsp;&nbsp;&nbsp;有账号，但</span>
				<a href="">忘记密码</a>
				
			</div>
		</div>
		
	</div>
</template>
<script>
	import axios from 'axios'
	import index from './index.vue'
export default {
	data() { return{
		activeIndex: '6',
		account:'',
		password:''
	}
},
	methods: {
		open1() {
		        this.$message({
		                  message: '登录成功',
		                  type: 'success'
		                });
		      },
		open4() {
		        this.$message.error('用户名或密码有误！');
		      },	  
		sign:function(){//请求登录
		    var that= this
			console.log("登录")
			index.methods.usernameset(this.account)
			axios.get("http://1.116.236.191:8701/json/signin?account="+this.account+"&password="+this.password).then(function(response){
			console.log(response)
			if(response.data.isright==false){
				that.open4()
				}
			else{
				that.open1()
				that.$router.push('/home')
				that.COMMON.account=that.account
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
#title
{
text-align: center;
font-size: 25px;
}
#container{
	background-color: white;
	height:300px;;
	width:400px;
	position:absolute;
	right:100px;
	top:150px;
	}		
img{
	max-width:100%;
	height:auto;
/* 	margin:0 auto; */
	}
#sregister{
	text-align: center;
	font-size: 8px;
}
.sinput{
	 margin:0 auto;
	 text-align:center;
	width: 200px;
}
</style>