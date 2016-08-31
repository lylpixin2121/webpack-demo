function preload(imgList,callback){
	var num = 0;

	if(Object.prototype.toString.call(imgList).indexOf("Array") == -1) {
		throw Error("图片列表请使用数组形式")
		return false;	
	}

	var imgLength = imgList.length;

	if(!imgLength){
		return callback.call(num);
	}
	

	imgList.forEach(function(src, index){ 
		loadImg(src,function(){
			num++;
			callback.call(imgList[index],num,imgLength);
		})
	})


	function loadImg (url,callback){
		var img = new Image();
		img.onload = img.onerror = img.onabort = function(){
			callback.call(img)
		}
		img.src = url
	}
}

module.exports = preload;