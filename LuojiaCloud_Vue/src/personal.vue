<template>
	<div id="personal" align="center">
		<div id="pbackground">
			<br>
			<span class="phead">个人中心</span>
			<el-divider></el-divider>
			<div id="pinput">
				<p>个人账号：{{account}}</p>
				<p>用户名：{{userName}}</p>
				<el-button type="primary" plain @click="clear()" icon="el-icon-switch-button">退出登录</el-button>
			</div>


		</div>

		<!-- <el-link :href="fileloaction" download="blank">默认链接</el-link> -->

	</div>
</template>

<script>
	export default {
		data() {
			return {
				account: localStorage.account,
				userName: localStorage.userName,
			};
		},
		methods: {
			open1() {
				this.$notify({
					message: '退出登陆成功',
					type: 'success'
				});
			},
			clear: function() {
				localStorage.clear()
				// this.open1()
				this.$router.push('/home')
				window.location.reload()

			}
		}
	}
</script>

<style>
	#personal {
		background-color: whitesmoke;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}

	#pinput {
		text-align: left;
		width: 400px;
		height: 400px;
	}

	#pbackground {
		margin: 0 auto;
		text-align: center;
		width: 900px;
		height: 800px;
		background-color: white;
	}

	.phead {
		font-size: larger;
		
	}
</style>
