$(document).ready(function(){
 
  $(window).on("resize",function(){
		let clientW = $(window).width();
		// console.log(clientW);
		let isShowBigImage = clientW >= 800;
		//获取所有的item
		let $items = $(".banner .item");
		// console.log($items);
		//遍历
		$items.each(function(index,item){
			//取出图片的路径
			let src = isShowBigImage ? $(item).data("lg-img"):$(item).data("sm-img");
			let imgUrl = 'url("'+ src +'")';
			//设置背景
			$(item).css({
				backgroundImage:imgUrl//这里不能加;
			});
			//设置img标签
			if(!isShowBigImage){
				let $img = "<img src='"+src+"'>";
				$(item).empty().append($img);
			}else{
				$(item).empty();
			}
		});
	});
    $(window).trigger("resize");
	
	//footer中微信微博的提示
	 $('[data-toggle="tooltip"]').tooltip();
	 
	//3.处理tab，当屏幕变化时，头部选项出现滚动条
	//动态处理宽度
	$(window).on("resize",function(){
		let $ul = $(".product .nav");
		let $allLis = $("[role='presentation']",$ul);
		//3.1遍历
		let totalW = 0;
		$allLis.each(function(index,item){
			totalW += $(item).width();
		});
		
		let parentW = $ul.parent().width();
		
		if(totalW > parentW){
			$ul.css({
				width:totalW + 'px'
			})
		}else{
			$ul.removeAttribute("style");
		}
	});
	
	//4.导航处理
	let allLis = $(".head li");
	$(allLis[2]).on("click",function(){
		$("html,body").animate({
			scrollTop:$(".hot").offset().top
		},1000);
	});
	$(allLis[0]).on("click",function(){
		$("html,body").animate({
			scrollTop:$(".about").offset().top
		},1000);
	});
	$(allLis[1]).on("click",function(){
		$("html,body").animate({
			scrollTop:$(".product").offset().top
		},1000);
	});
	$(allLis[3]).on("click",function(){
		$("html,body").animate({
			scrollTop:$(".link").offset().top
		},1000);
	});
	//返回顶部
	let toTop = $("#toTop");
	$(toTop).on("click",function(){
		$("html,body").animate({
			scrollTop:$(".head").offset().top
		},1000);
	})
});

