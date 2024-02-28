$(function(){
	$("li.lnb_sub dt a").click(function(a){
		a.preventDefault();
		if($(this).hasClass("open") == false){
			$(this).addClass("open")
			$(this).parent("dt").next("dd").slideDown(300)
		}else{
			$(this).removeClass("open")
			$(this).parent("dt").next("dd").slideUp(300)
		}
	})


	var pg="";
	var lnbpg="";

	pg=parseInt($(".lnbDat").attr("pgIndex"))
	lnbpg=$("li.lnb_sub dd li").eq(pg).find("a").text();
	$("li.lnb_sub dt a").text(lnbpg)
})