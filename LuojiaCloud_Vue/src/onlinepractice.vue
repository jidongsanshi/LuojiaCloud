<template>
	<div id="onlinepractice" align="center">
		<div id="olbackground">
			<br>
			<span class="olhead" >在线机器学习</span>
			
			<el-divider></el-divider>
			<div id="olinput">
				<el-upload
				  class="upload-demo"
				  ref="upload"
				  name="data"
				  :action=location
				  :on-preview="handlePreview"
				  :on-remove="handleRemove"
				  :file-list="fileList"
				  :auto-upload="false">
				  <el-button slot="trigger"  type="primary" icon="el-icon-document-add">选取文件</el-button>
				  <el-button style="margin-left: 10px;"  type="success" @click="submitUpload()" icon="el-icon-upload">上传到服务器</el-button>
				  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
				</el-upload><br><br>
				<el-select v-model="value" placeholder="请选择算法">
				    <el-option
				      v-for="item in goodslist"
				      :key="item.goods_id"
				      :label="item.goods_name"
				      :value="item.goods_id"
				      :disabled="!item.isforgot">
				    </el-option>
				  </el-select><br>
				<!-- <el-button type="primary" plain @click="calls()">主要按钮</el-button> -->
				<br>
				<el-button type="primary" plain @click="calls()" icon="el-icon-video-play">开始机器学习</el-button><br><br>
				<el-button type="primary" plain @click="download()" icon="el-icon-download">下载结果</el-button>
			</div>
			
			
		</div>
		
		<!-- <el-link :href="fileloaction" download="blank">默认链接</el-link> -->
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
	    data() {
	      return {
	        fileList: [],
			account:localStorage.account,
			location:"http://1.116.236.191:8701/uploadfile?useraccount="+localStorage.account,
			fileloaction:'',
			goodslist: [],
			        value: '',
			ifupload: false
	      };
	    },
	    methods: {
	      submitUpload() {
	        this.$refs.upload.submit();
			this.ifupload=!this.ifupload
	      },
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      handlePreview(file) {
	        console.log(file);
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
		            message: '请先登录',
		  		  type:'warning'
		          });
		        },
		  // read:function(){
			 //  var that=this
			 //  axios.get("http://1.116.236.191:8701/json/read").then(function(response){
			 //  console.log(response)
			 //  that.result=response.data
			 //  })
			 //  .catch(function(err){
			 //  	console.log(err)
			 //  })
		  // },
		  calls:function(){
			  if(!this.ifupload){
				  this.open3()
			  }
			  else{
				  if(this.value==''){
				  				  this.open2()
				  }
				  else{
					  var that=this
				  				 axios.get("http://1.116.236.191:8701/json/calls?useraccount="+this.account+"&goodsid="+this.value).then(function(response){
				  				 console.log(response)
								 that.fileloaction=response.data
								 that.open4()
				  				 
				  				 })
				  				 .catch(function(err){
				  				 	console.log(err)
				  				 }) 
				  }
			  }
			  
		  			  
		  },
		  download:function(){
			  window.location.href = this.fileloaction
			  this.href
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
		open2() {
		        this.$notify({
		          message: '请先选择算法',
				  type:'warning'
		        });
		      },
		open3() {
		        this.$notify({
		          message: '请先选择上传的文件',
				  type:'warning'
		        });
		      },
		open4() {
		        this.$notify({
		          message: '机器学习已完成',
				  type:'success'
		        });
		      },
	    },
		mounted: function() {
			this.tosignin()
			this.getgoodsinfo()
		}
	  }
</script>

<style>
	#onlinepractice{
			background-color: whitesmoke;
		}
		#olinput{
			margin:0 auto;
			 text-align:center;
			width: 400px;
			height: 400px;
		}
	#olbackground{
		margin:0 auto;
	 	 text-align:center; 
		width: 900px;
		height: 800px;
		background-color: white;
		}
	.olhead{
		font-size: larger;	
	}
	
</style>
