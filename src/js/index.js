
require("../css/style.scss");
console.log("hello,world!")
console.log("123");


var odiv = document.querySelector(".banner1");
odiv.addEventListener("click", function(){
	var lyl = require("./show.js");
	alert(lyl.name)
}, false)