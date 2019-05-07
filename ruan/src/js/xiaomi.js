$(function() {
    var index, sub = false;
    $(".nav-item").hover(function() {
        index = $(this).index();
        if ($(this).find(".header-nav-menu").length > 0 || sub) {

            $(".header-nav-menu").eq(index).stop().slideDown();
            sub = true;

        } else {

            $(".header-nav-menu").eq(index).stop().slideDown();

        }
    }, function() {
        $(".header-nav-menu").eq(index).stop().slideUp();
    });



    $("#banner_menu_wrap").children().hover(function() {
        $(this).css("background", "#ff6700");
        $(this).children(".banner_menu_content").css("border", "1px solid #f0f0f0").show();
    }, function() {
        $(this).css("background", "none");
        $(this).children(".banner_menu_content").css("border", "0px solid #F0F0F0").hide();
    });

    var i = 0;
    var big_banner_pic = $("#big_banner_pic");
    var allimg = $("#big_banner_pic li").length;

    function img_change() {
        var img_i = i * -1226 + "px";
        big_banner_pic.animate({ opacity: ".2" }, 100, function() {
            big_banner_pic.css("left", img_i);
            big_banner_pic.animate({
                opacity: "1"
            }, 100);
        })
    }

    function automatic() {
        i += 1;
        if (i >= allimg) {
            i = 0;
        }
        img_change();
    }
    change_self_time = setInterval(automatic, 3000);
    // 左右按键
    $("#big_banner_change_wrap").hover(function() {
        clearInterval(change_self_time);
        $("#big_banner_change_wrap").children().show();
    }, function() {
        change_self_time = setInterval(automatic, 3000);
        $("#big_banner_change_wrap").children().hide();
    })

    let time;
    $("#big_banner_change_next").click(function() {
        clearTimeout(time);
        time = setTimeout(function() {
            i += 1;
            if (i >= allimg) {
                i = 0;
            }
            img_change();
        }, 1000);
    })

    // $("#big_banner_change_prev").click(function() {
    //     i += 1;
    //     if (i >= allimg) {
    //         i = 0;
    //     }
    //     img_change();
    // });


    $("#big_banner_change_next").click(function() {
        i -= 1;
        if (i <= 0) {
            i = allimg - 1;
        }
        img_change();
    });


})