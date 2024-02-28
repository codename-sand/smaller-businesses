$(document).ready(function() {

    $("div.bank_popup").hide();
    
    $("a.submit_btn").click(function (e) { 
        e.preventDefault();
        $("div.bank_popup").show();
    });

    $("div.close").click(function (e) { 
        e.preventDefault();
        $("div.bank_popup").hide();
    });
})