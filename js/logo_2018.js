$(document).ready(function() {
    var totalImgNum = 746;
	var htmlList = '<li class="js-load"><img src="" alt="logo_img"></li>';
	var imgNumber = 0;
    var imgSrc = "";
    var maxNumOnce = 18;

    // 반복
    function repeat_string(string, count)
    {
        // console.log("reapeat_string 호출");
        if ((string == null) || (count < 0) || (count === Infinity) || (count == null)){
            return("Error in string or count.");
        }
        count = count | 0; // Floor count.
        return new Array(count + 1).join(string);
    }

    // 리스트 생성
    $("ul.logo_list02").append(repeat_string(htmlList, totalImgNum));
    // console.log("append 호출");
    
    // 이미지 넣어주기
    $("ul.logo_list02 li").each(function(){
        // console.log("each_function 호출");

        imgNumber=$(this).index()+1;
        
        $(this).addClass("active");	

        if(imgNumber < 10){
            imgSrc= "img/2018_business/business0" + imgNumber + ".gif"
        }else{
            imgSrc= "img/2018_business/business" + imgNumber + ".gif"
                if(imgNumber > maxNumOnce) {
                    $(this).removeClass("active");
                    $(this).hide();
                }
            }
        $(this).find("img").attr("src", imgSrc)
    });

    
});


$(window).scroll(function () {

    var page_height = $(document).height(); //현재 페이지 height값
    var window_height = $(window).height(); //현재 화면의 height값
    var scroll_height = $(document).scrollTop(); //현재 화면 스크롤의 위치값
    var change_height = 100; //로딩 될 scroll height 남은 값
    var cur_height = window_height + scroll_height; //현재 높이
    var footer = $("footer").offset().top;

    // console.log("footer : " + footer);
    // console.log("\n\n--------selected_company : " + selected_company);
    // console.log("page_height : " + page_height);
    // console.log("window_height : " + window_height);
    // console.log("scroll_height : " + scroll_height);
    // console.log("cursor_height : " + cur_height);
    // console.log("if_height : " + (page_height - cur_height));

    
    if(footer < cur_height ) {
        // console.log("if---");
        load('#load_2018', '6');
    }

    else {
        // console.log("else");
    }

    function load(id, cnt) {
		// console.log("load실행");
	    var inactive_logo_list = id + " .js-load:not(.active)";
        var logo_length = $(inactive_logo_list).length;
        // console.log(logo_length);
        var logo_total_cnt;
	    if (cnt < logo_length) {
			logo_total_cnt = cnt;
			// console.log("ok");
	    } else {
	        logo_total_cnt = logo_length;
			// console.log("ok");
		}
		inactive_logo_list = $(inactive_logo_list + ":lt(" + logo_total_cnt + ")").addClass("active");
		$(inactive_logo_list).css("display","block");
	}

    // // 스크롤 밑부분
    // // if ((page_height-cur_height) < change_height) {
    //     // 조건 만족으로 로딩 시작
    //     console.log("------if 실행-----------")
    // // }
    // // else {
    //     // 로딩 없음
    //     console.log("------else 실행-----------")
    // // }


});