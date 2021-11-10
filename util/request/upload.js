const qiniu = require('qiniu-js')

import { photoTokenUrl } from '../api.js'
import axios from './request.js'

// 获取上传 token
export async function  getUploadToken() {
	const {data:res} = await axios.get(photoTokenUrl)
	const token = res.data.uptoken
	return token
}

// 执行上传
async function upLoadPhoto(img,token,key) {
	
	const options = {
	  quality: 0.80,
	  noCompressIfLarger: true
	}
	
	const observer = {
	  error(err){
	   
	  },
	  complete(res){
	    
	  }
	}
	
	data = await qiniu.compressImage(img, options)
	const observable = qiniu.upload(data.dist, key, token)
	
}