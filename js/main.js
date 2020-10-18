$(document).ready(function() {
            $("a.btn").click(function(){
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top + "px"
                }, {
                    duration: 1000,
                    easing: "swing"
                });
                return false;
            });
        });
$(function () {
    $(window).scroll(function() {
        $('.section__title').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("bounceInDown");
                $(this).css('opacity','100%');
            }
        });
    });

    $(window).scroll(function() {
        $('.wrapper > div').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInDown");
                $(this).css('opacity','100%');

            }
        });
    });
//    $('.form input').each(function( index, element ){
//        var i=1;
//        $('this').css('animation-delay',"i\2");
//    });
    $(window).scroll(function() {
        $('form input:even').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            $(this).addClass("animated")
            if (imagePos < topOfWindow+650) {
                $(this).addClass("slideInLeft");
                $(this).css('opacity','100%');
            }
        });
    });
    $(window).scroll(function() {
        $('form input:odd').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            $(this).addClass("animated")
            if (imagePos < topOfWindow+800) {
                $(this).addClass("slideInRight");
                $(this).css('opacity','100%');
            }
        });
    });
    $(window).scroll(function() {
        $('button').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            $(this).addClass("animated")
            if (imagePos < topOfWindow+900) {
                $(this).addClass("fadeInUp");
                $(this).css('opacity','100%');
            }
        });
    });
})
