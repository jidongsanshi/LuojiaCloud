<template>
	<div align="center">
		<el-row>
			<el-col :span="20" :offset="2">
				<el-table :data="tableData" style="width: 100%">
					<el-table-column prop="goods_id" label="订单号">
					</el-table-column>
					<el-table-column prop="goods_name" label="算法名">
					</el-table-column>
					<el-table-column prop="goods_price" label="价格">
					</el-table-column>

					<el-table-column prop="datatime" label="日期">
					</el-table-column>
				</el-table>
			</el-col>
		</el-row>

	</div>

</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				account: localStorage.account,
				tableData: []
			}
		},
		methods: {
			getordersinfo: function() {
				var that = this
				console.log("获取订单")
				axios.get("http://1.116.236.191:8701/json/getuserorders?useraccount=" + this.account).then(function(
						response) {
						console.log(response)
						that.tableData = response.data
						console.log(that.tableData[0].datatime)
					})
					.catch(function(err) {
						console.log(err)
					})
			},
			tosignin:function(){
				if(this.account==null){
					this.$router.push('/signin');				
					this.open1();
					// this.$emit("reload")
					
				}
			},
			open1() {
			        this.$notify({
			          message: '请先登录来查看订单',
					  type:'warning'
			        });
			      },
		},
		mounted: function() {
			this.tosignin()
			this.getordersinfo()
		}
	}
</script>

<style>
</style>
