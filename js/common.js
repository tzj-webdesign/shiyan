var d_Value=$(".fh input.text").val();//获取到他的默认值alert(d_value);
$(".fh input.text").focus(function(){
	//$(this)同等于我们$(".search input.text")
	if($(this).val()==d_Value){
		$(this).val("");//当前输入框的值设置为空
	}
});
//失去焦点
$(".search input.txt").blur(function()
{
	if($(this).val()==""){
		$(this).val(d_Value);//给它赋初始值
	}
});
$(".Nav .mainNav ul li").hover(function(){
	$(this).find(".menu").show();//显示出.menu
	$(this).addClass("hover");//给li添加class="hover"
},function(){
	$(this).find(".menu").hide();//隐藏.menu
	$(this).removeClass("hover");//移除li class="hover"
});
//广告轮播
var _index=0;//初始化序列
var timePlay=null;
$("#Adv .ImgList").eq(0).siblings("div").hide();//找的0序号的图片
$("ul.button li").hover(function(){
	clearInterval(timePlay);//清处定时播放器(暂停)
	_index=$(this).index();//获取当前li序列号
	//alert(_index);//打印的弹窗
	$(this).addClass("hover").siblings().removeClass("hover");
	$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//fadeIn淡入 fadeOut淡出
}/*鼠标在上面的效果*/,function(){ 
	autoPlay();//启用定时播放器 
}/*鼠标移动的效果*/);
function autoPlay(){
	timePlay=setInterval(function(){
		_index++;
	if(_index<4){
		if(_index==3){_index=-1;}
	$("ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");
	$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();
	}else{_index=-1;}
	},2000);
	//构建自动轮播的函数
};
autoPlay();//调用和执行
//路线推荐选项卡效果
//鼠标滑上去的效果mouseover
$("ul.select_but li").mouseover(function(){
	$(this).addClass("hover").siblings().removeClass("hover");//同级的移除
	$(this).index();
	$(".select_con .select_content").eq($(this).index()).show().siblings().hide();//改变内容区
});
//路线推荐的图片文字滑动效果
$("ul.sel_imgList li").hover(function(){
	$(this).find("p").animate({height:"50px"},200)
},function(){
	$(this).find("p").animate({height:"0px"},200)
});
/*第一部分内容区广告的效果*/
var _index2=0;
var timeInterval=null;
$("ul.part_scrollBut li").hover(function(){
	clearInterval(timeInterval);//清除定时器
	_index2=$(this).index();//获取当前li序列号
	$(this).addClass("hover").siblings().removeClass("hover");
	$(".part_ScrollCon").animate({left:"-"+_index2*339+"px"},1000);
	$("ul.part_scrollTxt li").eq(_index2).show().siblings().hide();
},function(){
	autoPlay2();
});//序列号相同的显示，其他隐藏
//自动轮播
function autoPlay2(){
	timeInterval=setInterval(function(){
		if(_index2<=4){if(_index2==4){_index2=-1;}
		_index2++;
		$("ul.part_scrollBut li").eq(_index2).addClass("hover").siblings().removeClass("hover");
		$(".part_ScrollCon").animate({left:"-"+_index2*339+"px"},1000);
		$("ul.part_scrollTxt li").eq(_index2).show().siblings().hide();
		}else{_index2=-1;}
	},1000)
	
};
autoPlay2();