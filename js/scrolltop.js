// JavaScript Document


$(function() {
    $('#gotop').click(function() {
        $('html,body').animate({ scrollTop:0}, 900);
    });
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});