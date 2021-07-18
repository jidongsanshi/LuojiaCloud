<template>
	<div>
		<div class="block" style="clear: both;">
		    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
		    <el-carousel height="544px" >
				<el-carousel-item >
					<img src="./img/wallhaven1.jpg" />
				</el-carousel-item>
				<el-carousel-item >
					<img src="./img/wallhaven-9mzjwk.jpg" />
				</el-carousel-item>
			</el-carousel>
		  </div>
<!-- 		  <el-button type="primary" plain @click="change()">主要按钮</el-button>
		  {{account}} -->
	</div>
</template>

<script>
	export default {
			data() {
				return{
					account:this.$route.query.id
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
