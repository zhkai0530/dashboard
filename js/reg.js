$("document").ready(function(){
	var $login_pwd;/*密码*/
	/*****************
	** 获取单选结果：是否需要密码；根据结果设置密码
	*******************/
	function getRadio(){
		var $sel = $("input[name='sel']:checked").attr("data-answer");
		if($sel == "yes"){
			$login_pwd = "qaz-123!";
			$("input[type='password']").attr({"placeholder":"请输入密码","title":"密码提示：qaz-123!"});
		}else if($sel == "no"){
			$login_pwd = "";
			$("input[type='password']").attr({"placeholder":"未创建密码","title":"密码提示："});
		}
	}
	$("input[name='sel']").click(function(){
		$(".select_box").css({"display":"none"});
		getRadio();
	})
	/**
	 * 点击后重新选择是否需要密码
	 */
	$(".reselect p").click(function(){
		$(".select_box").css({"display":"block"});
	})
	
	/*登录*/
	function loginClick(){
		var $pwd = $("input[type='password']").val();
		if($pwd === $login_pwd){
			$(location).attr("href","page_html/Dashboard.html");
		}else{
			$(".err_info p").css({
				"display":"block"
			});
		}
	}
	$(document).keydown(function(event){
		if(event.keyCode == 13){
			$("input[type='button']").click();
		}
	})
	$("input[type='button']").click(function(){
		loginClick();
	})
})