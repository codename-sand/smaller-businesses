$(document).ready(function() {

	var logoNum2017 = 63;
	var logoLi2017 = '<li class="js-load"><img src="" alt="logo_img"></li>';
	var logoLiIndex2017 = 0;
	var logoLisrc2017 = "";
	var maxNumOnce = 24; 

	function repeat_string(string, count) {
	 	if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
	   {
	     return('Error in string or count.');
	   }
	     count = count | 0; // Floor count.
	 return new Array(count + 1).join(string);
	};


	// $('ul.logo_list01').html(logoLi2017.repeat(logoNum2017));
	$('ul.logo_list01').append(repeat_string(logoLi2017, logoNum2017));

	
	$('ul.logo_list01 li').each(function() {
		logoLiIndex2017=$(this).index()+1;

		$(this).addClass("active");	

		if(logoLiIndex2017 < 10) {
			logoLisrc2017 = "img/2017_business/business0" + logoLiIndex2017 + ".gif"
		}else {
			logoLisrc2017 = "img/2017_business/business" + logoLiIndex2017 + ".gif"
			if(logoLiIndex2017 > maxNumOnce) {
				$(this).removeClass("active");
				$(this).hide();
			}
		}

		$(this).find("img").attr("src", logoLisrc2017);
		})
	});

	$(".more_one").off("click").click(function(){
		load_one('#load_2017', '24', ".more_one");
	});


	function load_one(id, cnt, btn) {

	    var inactive_logo_list = id + " .js-load:not(.active)";
		var logo_length = $(inactive_logo_list).length;
	    var logo_total_cnt;

	    if (cnt < logo_length) {
			logo_total_cnt = cnt;
	    } else {
	        logo_total_cnt = logo_length;
			$(btn).hide();
		}

		inactive_logo_list = $(inactive_logo_list + ":lt(" + logo_total_cnt + ")").addClass("active");

		$(inactive_logo_list).css("display","block");
	}




	$(window).scroll(function () {
		var page_height = $(document).height(); //현재 페이지 height값
	
		var window_height = $(window).height(); //현재 화면의 height값
		var scroll_height = $(document).scrollTop(); //현재 화면 스크롤의 위치값
	
		var change_height = 100; //로딩 될 scroll height 남은 값
		
		var cur_height = window_height + scroll_height; //현재 높이
	
		if ((page_height-cur_height)<change_height) {
			//조건 만족으로 로딩 시작
		}
		else {
			//로딩 없음
		}
	});