
<template>
	<div>
		<img src="../img/IMG_20210706_101340.jpg">
		<div id="container" ><br><br>
			<div id="title">登录到珞珈云<br><br></div>
			<div class="input">
			<el-input placeholder="请输入用户名" v-model="account" clearable></el-input>
			<p></p>
			<el-input placeholder="请输入密码" v-model="password" show-password></el-input>
			<p></p>
			<el-button type="primary" plain @click="sign">登录</el-button>	
			</div>
			<div id="register">
				<br>
				<span>还没有账号，</span>
				<router-link to="/components/register">注册一个</router-link>
				<span>&nbsp;&nbsp;&nbsp;有账号，但</span>
				<a href="">忘记密码</a>
			</div>
		</div>
		
	</div>
</template>
<script>
	import axios from 'axios'
export default {
	data() { return{
		activeIndex: '6',
		account:'',
		password:''
	}
},
	methods: {
		sign:function(){//请求登录
			console.log("登录")
			console.log(this.account)
			axios.get("../json/signin?account="+this.account+"&password="+this.password).then(function(response){
			console.log(response)
			if(response.data.isright==false){
				alert("用户名或密码有误！")
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
	}
#register{
	text-align: center;
	font-size: 8px;
}
#head{
background-color: #FFFFFF;
}
.input{
	 margin:0 auto;
	 text-align:center;
	width: 200px;
}
</style>