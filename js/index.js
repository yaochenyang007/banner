jQuery(function ($){
  //初始化菜单
  $(".js-menu-sub").bind("mouseenter",function(evt){
     var $list=$(this).find(".js-menu-list");
     $list.slideDown();
  });
  $(".js-menu-sub").bind("mouseleave",function(evt){
     var $list=$(this).find(".js-menu-list");
     $list.slideUp(400,function(evt){
        $list.stop();
     });
  });
  //函数调用
  	adImgBanner("bannerBox",[
  		"images/1.jpg",
  		"images/2.jpg",
      "images/3.jpg",
  		"images/4.jpg",
  		"images/5.jpg",
  		"images/6.jpg",
  		"images/7.jpg"
	],800,function(){
		console.log(this);
	});
})

