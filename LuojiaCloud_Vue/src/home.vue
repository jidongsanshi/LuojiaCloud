<template>
	<div>
		<div class="block" style="clear: both;">
		    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
		    <el-carousel  height="670px" style="z-index: 0;">
				<el-carousel-item  >
					<img src="./img/wallhaven-wqy6d7.jpg" />
				</el-carousel-item>
				<el-carousel-item >
					<img src="./img/wallhaven-l3qpeq.jpg" />
				</el-carousel-item>
				<el-carousel-item >
					<img src="./img/wallhaven-726k9v.jpg" />
				</el-carousel-item>
			</el-carousel>
		  </div>
		  <div id="strength">
		  	<el-row>
		  		<el-col :span="4" v-for="(item, i) in welllist" :key="i" :offset="2">
		  			<el-card :body-style="{ padding: '0px' }">
		  				<img :src="item.img"
		  					class="image">
		  				<div style="padding: 14px;">
		  					<span>算法名称：{{item.name}}</span>
		  					<div class="bottom clearfix">
		  						<p class="des">算法介绍：{{item.description}}</p>
		  					</div>
		  				</div>
		  			</el-card>
		  		</el-col>
		  	</el-row>
		  </div>
			
	</div>
</template>

<script>
	export default {
			data() {
				return{
					account:this.$route.query.id,
					welllist: [{img:"./img/strength01.png,",
								name:"快速上手",
								description:"完全托管的环境内置主流算法框架和软件库，无需配置环境，点开即用，最大程度保证您使用的灵活性。"
					}],
				}
			},
			// methods:{
			// 	change:function(){
			// 		this.COMMON.account="6sdf"
			// 	}
			// }
	  }
	  
</script>

<style>
	.block{
		margin:0 auto;
		width: 83.3%;
	}

</style>
