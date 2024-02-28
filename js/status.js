$(document).ready(function() {
	
	// tab
	$('.contents > div:not(:first)').hide(0);
	
	$('.tab > li').click(function(){
		 var i = $(this).index();
		$('.tab > li').removeClass('active');
		$(this).addClass('active');
		$('.contents > .content').hide(0);
		$('.contents > .content').eq(i).show(0);
	});

	// logo-list
	var logoNum2017 = 63;
	// var logoLi2017 = '<li><img src="" alt="logo_img" class="js-load"></li>';

	// li에 js-load 클래스 준 이유 >> 이미지 리스트 초기화할때 li에 hide를 먹임
	// img에 클래스 줄 경우 load 메소드에서 img로 리스트를 만듬 그 경우 img태그에 block 먹이고
	// 그 li엔 hide가 여전히 유효하기때문에 이미지안보임 그래서 애초에 li를 넘겨서 hide 풀 수 있게 하기 위함
	var logoLi2017 = '<li class="js-load"><img src="" alt="logo_img"></li>';
	var logoLiIndex2017 = 0;
	var logoLisrc2017 = "";
	var maxNumOnce = 24; 

	$('ul.logo_list01').html(logoLi2017.repeat(logoNum2017));

	$('ul.logo_list01 li').each(function() {
		console.log("이미지 리스트 불러오기");
		logoLiIndex2017=$(this).index()+1;

		$(this).addClass("active");	

		if(logoLiIndex2017 < 10) {
			logoLisrc2017 = 'img/2017_business/business0' + logoLiIndex2017 + '.gif'
		}else {
			logoLisrc2017 = 'img/2017_business/business' + logoLiIndex2017 + '.gif'
			if(logoLiIndex2017 > maxNumOnce) {
				$(this).removeClass("active");
				$(this).hide();
			}
		}

		$(this).find("img").attr("src", logoLisrc2017);
		})
	});

	// off 넣은 이유 >> 이상하게 click이 두번 실행됨 이유 모름
	$(".more").off("click").click(function(){
		console.log("더보기 클릭");
		load('#js-load_2017', '24', ".more");
	});
	


	var logoNum2018 = 746;
	var logoLi2018 = '<li><img src="" alt="logo_img" class="js-load"></li>';
	var logoLiIndex2018 = 0;
	var logoLisrc2018 = "";

	$('ul.logo_list02').html(logoLi2018.repeat(logoNum2018));

	$('ul.logo_list02 li').each(function() {
		logoLiIndex2018=$(this).index()+1;
		if(logoLiIndex2018 < 10) {
			logoLisrc2018 = 'img/2018_business/business0' + logoLiIndex2018 + '.gif'
		}else {
			logoLisrc2018 = 'img/2018_business/business' + logoLiIndex2018 + '.gif'
		}
		$(this).find("img").attr("src", logoLisrc2018);
	});
	

	function load(id, cnt, btn) {
		console.log("load실행");
	    var inactive_logo_list = id + " .js-load:not(.active)";
		var logo_length = $(inactive_logo_list).length;
		console.log(logo_length);
	    var logo_total_cnt;
	    if (cnt < logo_length) {
			logo_total_cnt = cnt;
			console.log("된다1");
	    } else {
	        logo_total_cnt = logo_length;
			$(btn).hide();
			console.log("된다2");
		}
		//리스트의 total_cnt번째까지 active 클래스 줌(선실행) inactive_logo_list에 그 24개를 대입(후실행)
		inactive_logo_list = $(inactive_logo_list + ":lt(" + logo_total_cnt + ")").addClass("active");
		//active 된 total_cnt개수의 li에 css 변경
		$(inactive_logo_list).css("display","block");
	}


	// $(window).on('load', function () {
	//     load('#js-load', '24');	
	    
	//     $(".more_btn").click(function(){
	//         load('#js-load', '24', '.more_btn');
	//     });
	// });
	 
	