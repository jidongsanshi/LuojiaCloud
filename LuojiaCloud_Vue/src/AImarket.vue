<template>
	<div id="aimarket">

		<el-row>
			<el-col :span="5" v-for="(item, i) in goodslist" :key="i" :offset="1">
				<el-card :body-style="{ padding: '0px' }">
					<img :src="imgl(item.goods_id)"
						class="image">
					<div style="padding: 14px;">
						<span>算法名称：{{item.goods_name}}</span>
						<div class="bottom clearfix">
							<p class="des">算法介绍：{{item.goods_description}}</p>
							<span>限时特惠：{{item.goods_price}}</span>
							<el-button type="text" class="button" @click="makeanorder(item.goods_id)" :disabled="item.isforgot">{{isbuy(item.isforgot)}}</el-button>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				account:'55566677883',
				goodslist: [],
				orderlist:[],
				
			};
		},
		methods: {
		// 	Isbuy:function(n){
		// 		for(var i=0;i<this.orderlist.length;i++){
		// 			if(n==this.orderlist[i].goods_id){
		// 				buy="已购买"
		// 				return true
		// 				break
		// 			}
		// 		}
		// 		return false
		// 		this.buy="购买"
		// 	},
		isbuy:function(i){
			if(i){
				return "已购买"
			}
			else{
				return "购买"
			}
		},
		imgl:function(n){
			var s="./img/ai"+n+".png"
			return s
		},
			makeanorder:function(num){
				axios.get("http://1.116.236.191:8701/json/makeanorder?useraccount="+this.account+"&goods_id="+num).then(function(
						response) {
						console.log(response)
					})
					.catch(function(err) {
						console.log(err)
					})
			},
			getordersinfo: function() {
				var that = this
				console.log("获取订单")
				axios.get("http://1.116.236.191:8701/json/getuserorders?useraccount=" + this.account).then(function(
						response) {
						console.log(response)
						that.orderlist = response.data
					})
					.catch(function(err) {
						console.log(err)
					})
			},
			getgoodsinfo: function() {
				let _this = this;
				axios.get("http://1.116.236.191:8701/json/getgoodsinfo?useraccount="+this.account).then(function(response) {
						console.log(response.data)
						_this.goodslist = response.data
					})
					.catch(function(err) {
						console.log(err)
					})

			},
		},
		mounted: function() {
			this.getordersinfo()
			this.getgoodsinfo()
		}
	}
</script>

<style>
	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 480px
	}

	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
	.des{
		font-size: x-small;
		height: 100px;
	}
</style>
