<template>
	<div id="onlinepractice">
		<el-upload
		  class="upload-demo"
		  ref="upload"
		  name="data"
		  action="http://1.116.236.191:8701/uploadfile"
		  :on-preview="handlePreview"
		  :on-remove="handleRemove"
		  :file-list="fileList"
		  :auto-upload="false">
		  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
		  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload()">上传到服务器</el-button>
		  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
		</el-upload>
		<!-- <el-button type="primary" plain @click="calls()">主要按钮</el-button> -->
		<br>
		<el-button type="primary" plain @click="read()">转换</el-button>
		{{result}}
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
	    data() {
	      return {
	        fileList: [],
			result:''
	      };
	    },
	    methods: {
	      submitUpload() {
	        this.$refs.upload.submit();
	      },
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      handlePreview(file) {
	        console.log(file);
	      },
		  read:function(){
			  var that=this
			  axios.get("http://1.116.236.191:8701/json/read").then(function(response){
			  console.log(response)
			  that.result=response.data
			  })
			  .catch(function(err){
			  	console.log(err)
			  })
		  },
		  calls:function(){
		  			  axios.get("http://1.116.236.191:8701/json/calls").then(function(response){
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
