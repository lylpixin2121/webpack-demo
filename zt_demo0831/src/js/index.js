require("../css/style.scss");
console.log("hello,world!")
console.log("123");




var imgArr = [
	require("../images/1.png"),
	require("../images/button.png"),
	require("../images/bg_lPic.jpg")
]
var load = require("./loading.js");
load(imgArr,function(a,b){
	console.log("目前加载到第" + a + "张图");
	console.log("总共有" + b + "张图")
	if(a == b){
		var winW = window.innerWidth,
			winH = window.innerHeight;
		//计算手机的屏幕大小	
		// body.style.width = docW + "px";
		document.body.style.height = winH + "px";

		var Swiper = require("./swiper-3.3.1.min.js");
		
		var mySwiper = new Swiper('.swiper-container',{
			direction : 'vertical'
		})
	}
})

