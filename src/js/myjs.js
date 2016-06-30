

var swiperAnimateCache = require("exports?swiperAnimateCache!./swiper.animate1.0.2.min.js");
var swiperAnimate = require("exports?swiperAnimate!./swiper.animate1.0.2.min.js");


/*初始化*/
var mySwiper1 = new Swiper(".lv-1",{
	//运动方向：水平方向
	direction:"vertical",
	
	//是否循环(存在bug)
//	loop:"true",
	
	//动画的初始化
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	}, 
	
	onSlideChangeEnd: function(swiper){ 
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	}
});	

