$(document).on("click", '.mouse', function(){
    var scrollOffset = $('.content-area-wrap');
    $('html').animate({
        scrollTop: $(scrollOffset).offset().top
    }, 800);
    return false;
});

 


