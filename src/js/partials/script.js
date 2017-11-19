$(document).ready(function(){
    $('.js-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'
    });

    // mobile menu
    $(".js-showMobileMnu, a.navigationMobile__link").on('click', function () {
        $(".js-wrapper").toggleClass("--active");
        $(".navigationMobile").toggleClass("--active");
    });


    // validate form
    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    var mail = $('#email');

    mail.blur(function(){
        if(mail.val() != ''){
            if(pattern.test($(this).val())){
                mail.addClass('ok');
                $('#valid').text('Верно');
            } else {
                mail.addClass('error');
                $('#valid').text('Не верно');
            }
        }else{
            $('#valid').text('Поле e-mail не должно быть пустым!');
            mail.addClass('error');
            $('#submit').attr('disabled', true);
        }
    });

});