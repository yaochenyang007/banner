var adImgBanner = (function(){
	return function(id, imgArry ,speed, fun){
		/* 传入参数: 
		 * id : 元素的id
		 * imgArry : 图片路径数组
		 */
		var $imgBox = $("#"+id);
		$imgBox.fun = fun || function(){};
		var speed = speed || 800;
		var nowImgNum = 0;
		var html = '<div id="adImgBannerTitle" class="adImgTitle">'+imgArry.length+'</div>'
				+'<div id="imgMoveBox" class="imgMoveBox">'
				+'<img id="img" class="img js-img" src='+imgArry[nowImgNum]+'>'
				+'<img id="subImg" class="img subImg js-img" src="">'
			+'</div>'
			+'<div class="js-moveBtn moveBtn" data-type="-1">&lt;</div>'
			+'<div class="js-moveBtn moveBtn right" data-type="1">&gt;</div>';
		$imgBox.html(html);
		// 添加子元素
		var imgLength = imgArry.length;
		var btnCanClick = true;
		var step = +$("#img").css("width").split("px")[0];
		var $imgMoveBox = $("#imgMoveBox");
		var $img = $("#img");
		var $subImg = $("#subImg");
		$(".js-moveBtn").bind("click",function(evt){
			if(btnCanClick){
				btnCanClick = false;
				move($(this).data("type"));
			}
		})	
	  	function move(type){
	  		// type -1 左移动，1右移动
	  		// 调整subImg移动之前的位置
	  		$subImg.css("left","+=" + (-type*step) + "px");
	  		// 调整subImg的图片
	  		nowImgNum = getImgNum(nowImgNum,-type);
	  		$subImg.attr("src",imgArry[nowImgNum]);
	  		var move = "+=" + (type*step) + "px";
	  		$imgMoveBox.animate({
	  			left : move
	  		}, speed, function(){
	  			$imgMoveBox.css("left","-"+step+"px");
	  			$img.attr("src",imgArry[nowImgNum]);
	  			$img.css("left", step+"px");
	  			$subImg.css("left", step+"px");
	  			$("#adImgBannerTitle").text((nowImgNum+1)+"/"+imgLength);
	  			btnCanClick = true;
	  			$imgBox.fun();
	  		})
	  	}
	  	function getImgNum (num,type){	
	  		// num 是当前图片编号  
	  		// acv是 1表示 下一张，-1表示上一张
	  		num += type;
	  		return num>=imgLength ?  0 : num < 0 ?  imgLength-1 : num;
	  	}
  	}
})();