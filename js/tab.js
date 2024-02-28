$(document).ready(function() {
	
	// tab
	$('.contents > div:not(:first)').hide(0);
	
	$('ul.tab > li').click(function(){
		 var i = $(this).index();
		$('ul.tab > li').removeClass('active');
		$(this).addClass('active');
		$('.contents > .content').hide(0);
		$('.contents > .content').eq(i).show(0);
	})

});	 
	