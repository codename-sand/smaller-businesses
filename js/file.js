$(document).ready(function(){
  var fileTarget = $('.file_custom .hidden');
  var fileTargetSign = $('.file_add_sign .sign_hidden');
  var fileTargetCi = $('.file_add_ci .ci_hidden');
  var fileTargetStaff = $('.file_staff .staff_hidden');

    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload_name').val(filename);
    });

    fileTargetSign.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload_name_sign').val(filename);
    });

    fileTargetCi.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload_name_ci').val(filename);
    });

    fileTargetStaff.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload_name_staff').val(filename);
    });
    
}); 