$(function() {
    // 用户名
    var reg = /^[1-9][2-9]\d{9}$/;
    $('#loginname').on('keyup', function() {

        if (reg.test($(this).val())) {
            $('.phone').html("可以使用").css('color', 'green');
        } else {
            $('.phone').html("不可以使用").css('color', 'red');
        }
    });

    // 密码
    var reg1 = /^\w{6,16}$/;
    $('#password').on('keyup', function() {

        if (reg1.test($(this).val())) {
            $('.pwd').html("可以使用").css('color', 'green');
        } else {
            $('.pwd').html("不可以使用").css('color', 'red');
        }
    });
    // 提交表单
    function btn_reg_1() {
        $('.btn_reg_1').on('click', function() {
            if ($('#loginname').val() == "") {
                $('.phone').html("不能为空").css('color', 'red');
                return false;
            } else {
                return true;
            }
        })
    }
    btn_reg_1();





})