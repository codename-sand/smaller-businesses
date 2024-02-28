$(document).ready(function() {

	var logoNum2018 = 746;
	var logoLi2018 = '<li class="js-load"><img src="" alt="logo_img"></li>';
	var logoLiIndex2018 = 0;
	var logoLisrc2018 = "";
	var maxNumOnce = 24; 

	$('ul.logo_list02').html(logoLi2018.repeat(logoNum2018));

	$('ul.logo_list02 li').each(function() {
		logoLiIndex2018=$(this).index()+1;

		$(this).addClass("active");	

		if(logoLiIndex2018 < 10) {
			logoLisrc2018 = 'img/2018_business/business0' + logoLiIndex2018 + '.gif'
		}else {
			logoLisrc2018 = 'img/2018_business/business' + logoLiIndex2018 + '.gif'
			if(logoLiIndex2018 > maxNumOnce) {
				$(this).removeClass("active");
				$(this).hide();
			}
		}

		$(this).find("img").attr("src", logoLisrc2018);
		})
	});

	$(".more_two").off("click").click(function(){
		load_two('#load_2018', '24', ".more_two");
	});


	function load_two(id, cnt, btn) {

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
