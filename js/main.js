$(document).ready(function() {
	// canvas画图  canvas_1颜色是#a7afae  canvas_2颜色是#f0f0f0
	var can = $("#canvas_1")[0];
	var cxt = can.getContext("2d");
	cxt.translate(120,120);
	CanvasRenderingContext2D.prototype.sector = function(x,y,r,angle1,angle2){
        this.save();//封装后可能会多次用到此方法，为了避免第二次或以后画图会污染之前的图，先保存
        this.beginPath();
        this.moveTo(x,y);
        this.arc(x,y,r,angle1*Math.PI/180,angle2*Math.PI/180,false);
        this.closePath();    
        this.restore();
        return this;
    }
    CanvasRenderingContext2D.prototype.drawRect = function(x,y,w,h,color){
    	this.save();
    	this.beginPath();
    	this.fillStyle = color;
    	this.fillRect(x,y,w,h,color);
    	this.closePath();
    	this.restore();
    	return this;
    }
    CanvasRenderingContext2D.prototype.drawLine = function(x,y,x1,y1,lw,color){
    	this.save();
    	this.beginPath();
    	this.fillStyle = color;
    	this.moveTo(x,y);
    	this.lineTo(x1,y1);
    	this.strokeStyle = color;
    	this.lineWidth = lw;
    	this.stroke();
    	this.closePath();
    	this.restore();
    	return this;
    }
    // 容量分布图
    // 影片
    cxt.fillStyle = '#cc505f';
    cxt.sector(0,0,120,270,300).fill();
    //照片
    cxt.fillStyle = '#ECD057';
    cxt.sector(0,0,120,300,310).fill();
    //音乐
    cxt.fillStyle = '#3BA46F';
    cxt.sector(0,0,120,310,360).fill();
    //其他
    cxt.fillStyle = '#589DC5';
    cxt.sector(0,0,120,0,20).fill();
    //剩余容量
    cxt.fillStyle = '#A7AFAE';
    cxt.sector(0,0,120,20,270).fill();
    //上层覆盖
    cxt.fillStyle = '#F0F0F0';
    cxt.sector(0,0,74,0,360).fill();

    // CPU使用图
   var ctx = $("#canvas_2")[0].getContext("2d");
   ctx.drawRect(22,10,190,80,"#dfdfdf");

   ctx.drawLine(22,9,212,9,2,"#c0c0c0");
   ctx.drawLine(22,90,212,90,2,"#c0c0c0");
   ctx.drawLine(22,9,22,90,2,"#c0c0c0");
   ctx.drawLine(212,9,212,90,2,"#c0c0c0");

   ctx.drawLine(22,25,212,25,2,"#D6D6D6");
   ctx.drawLine(22,41,212,41,2,"#D6D6D6");
   ctx.drawLine(22,57,212,57,2,"#D6D6D6");
   ctx.drawLine(22,73,212,73,2,"#D6D6D6");

   ctx.drawLine(34.6,10,34.6,89,2,"#D6D6D6");
   ctx.drawLine(47.2,10,47.2,89,2,"#D6D6D6");
   ctx.drawLine(59.8,10,59.8,89,2,"#D6D6D6");
   ctx.drawLine(72.4,10,72.4,89,2,"#D6D6D6");
   ctx.drawLine(85,10,85,89,2,"#D6D6D6");
   ctx.drawLine(97.6,10,97.6,89,2,"#D6D6D6");
   ctx.drawLine(110.2,10,110.2,89,2,"#D6D6D6");
   ctx.drawLine(122.8,10,122.8,89,2,"#D6D6D6");
   ctx.drawLine(135.4,10,135.4,89,2,"#D6D6D6");
   ctx.drawLine(148,10,148,89,2,"#D6D6D6");
   ctx.drawLine(160.6,10,160.6,89,2,"#D6D6D6");
   ctx.drawLine(171.2,10,171.2,89,2,"#D6D6D6");
   ctx.drawLine(183.8,10,183.8,89,2,"#D6D6D6");
   ctx.drawLine(196.4,10,196.4,89,2,"#D6D6D6");

   //动态显示CPU使用率
  	
   window.onresize = changeSize();
   function changeSize(){
	   $('#canvas_2').width(0.738 * $('.network').width());
	   $('#canvas_1').width(0.504 * $('.capacity_box').width());
   }
// 导航栏二级菜单显示/隐藏
   $('.usb_box').click(show_hide);
   $(".warrning_box").click(show_hide);
   $(".issue_box").click(show_hide);
   $(".person_control").click(show_hide);
   
   $(document).click(function() {
   	   $(".pub_click").hide();
   	});
   $(".pub_click").click(function(e) {
           e?e.stopPropagation():event.cancelBubble = true;
    });
   function show_hide(){
	   var $this = $(this);
	   $this.children().toggle();
	   $this.siblings().children().hide();
	   event.stopPropagation();
   }
   // 动态的添加警告信息时间
   var timeNow = new Date();
   var year = timeNow.getFullYear();
   var month = timeNow.getMonth();
   var day = timeNow.getDate();
   var houres = timeNow.getHours();
   var minutes = timeNow.getMinutes();
   var seconds = timeNow.getSeconds();
   $(".header .warrning_box .date").text(year + "年" + month + "月" + day + "日" + "" + houres + ":" +minutes + ":" + seconds);
   
   //导航->二级菜单->hover
   $(".pub_detail").hover(
	   function(){
		   $(this).css({"background":"#15ABFF"});
	   },
	   function(){
		   $(this).css({"background":"#fff"});
	   }
	)
	$(".delete1").hover(
		function(){
			$(".pub_detail").css({"background":"#fff"});
			$(this).css({
				"background-image":"url(../images/main_sprite.png)",
				"background-repeat":"no-repeat",
				"background-position":"-182px -656px"
			});
		},
		function(){
			$(this).css({
				"background-image":"url(../images/main_sprite.png)",
				"background-repeat":"no-repeat",
				"background-position":"-199px -656px"
			});
			$(this).parents(".pub_detail").css({"background":"#15ABFF"});
		}
	)
	$(".more").hover(
		function(){
			$(".pub_detail").css({"background":"#fff"});
			$(this).css({
				"background-image":"url(../images/NAS_icn_hompage_activity_arrow_down.png)",
				"background-repeat":"no-repeat"
			});
		},
		function(){
			$(this).css({
				"background-image":"url(../images/NAS_icn_hompage_activity_arrow_up.png)",
				"background-repeat":"no-repeat"
			});
			$(this).parents(".pub_detail").css({"background":"#15ABFF"});
		}
	)
	//页面切换
	$(".menu_png").click(function(){
		$(".menu_png").removeClass("activation");
		$(this).addClass("activation");
		var $index = $(this).index();
		$(".page_pub").css({"display":"none"});
		$(".page_pub").eq($index).css({"display":"block"});
	});
	
	/**
	 * 登出*/
	 function logOut(){
		 $(location).attr("href","../index.html");
	 }
	 //主动登出
	 $(".logout").click(function(){
		 logOut();
	 });
	 // 倒计时登出
	 
	 function timeOut(){
		 var lastOperateTime = new Date();
		 
	 }
	 
	function shower(){
		var a = $(this).parents(".pub_detail").index();
		$(".report_mask").fadeIn();
		$(".mask_box").eq(a).fadeIn();
	}
	function hid(){
		$(".report_mask").fadeOut();
		$(".mask_box").fadeOut();
	}
	 /**
	  * 点击查看警告等信息*/
	  $(".more").click(function(){
		  shower();
		  // $(".detail_for_msg").css({"display":"none"})
	  })
	  /**
	   * 关闭遮罩层-警告信息*/
	   $(".mask_btn button").click(function(){
		 // $(".detail_for_msg").fadeIn();//为什么无法改回来
	  	 hid();
	   })
	   // 删除通知信息
	   $(".delete1").click(function(){
		   if(!$(".pub_detail")){
			   alert(1)
		   }
		   $(this).parents(".pub_detail").css({"display":"none"});
	   })
	   $(".check_all input").on('click',function(){
		   if($(".del_all").length>0){
			   console.log(11)
		   }else{
			   var delAllBtn = $("<button></button>");
			   delAllBtn.text("全部删除");
			   delAllBtn.addClass("del_all");
		   }
		   $(".report_mask").addClass("check_all_mask");
		   $(".mask_btn").prepend(delAllBtn);
		   shower();
		   $(".mask_btn").css({
			   "float":"none",
			   "display":"flex",
			   "justify-content": "space-between"
		   })
	   });
	   //全部删除功能
	   $(".del_all").on("click",function(){
		   console.log(10)
		   $(".mask_box").remove();
	   })
});
