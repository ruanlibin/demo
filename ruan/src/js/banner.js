$(function() {
    //返回顶部
    $('.totop').on('click', function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
});