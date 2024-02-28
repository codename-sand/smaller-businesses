$(document).ready(function() {
	$('.direct').click(function(){
		$('.none_area').show();
		$('.btn_wrap').hide();
	})

	$('.reset_wrap > a.refile').click(function() {
		$('.file_add_sign').show();
		$('.btn_wrap').hide();
		$('.none_area').hide();
	})

	$('.reset_wrap > a.rewrite').click(function() {
		$('.file_add_sign').hide();
		$('.btn_wrap').hide();
		$('.none_area').show();
	})

	$('.add_file').click(function(){
		$('.file_add_sign').show();
		$('.btn_wrap').hide();
	})
})