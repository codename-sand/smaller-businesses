document.addEventListener("DOMContentLoaded", function () {
    // click
    var clickEvents = document.querySelectorAll('dt .click_event');
    clickEvents.forEach(function (clickEvent) {
        clickEvent.addEventListener("click", function (e) {
            e.preventDefault();
            var isOpen = this.classList.contains('open');
            var dtParent = this.parentElement;
            var ddNext = dtParent.nextElementSibling;

            if (!isOpen) {
                this.classList.add('open');
                ddNext.style.display = "block"; // jQuery의 slideDown 메소드 대신 display 변경
            } else {
                this.classList.remove('open');
                ddNext.style.display = "none"; // jQuery의 slideUp 메소드 대신 display 변경
            }
        });
    });

    // insert-Data
    var mainText;
    var subText;
    var mainLnb;
    var subLnb;

    mainText = parseInt($('.lnbData').attr('mainNum'));
    subText = parseInt($('.lnbData').attr('subNum'));

    mainLnb = $('.main_menu dd li').eq(mainText).find('a').text();
    $('.main_menu dt a.click_event').text(mainLnb);

    $('.lnb_sub > ul > li').hide();
    $('.lnb_sub > ul > li').eq(mainText).show();

    subLnb = $('.lnb_sub li dd li').eq(subText).find('a').text();
    $('.lnb_sub dt a.click_event').text(subLnb);

});