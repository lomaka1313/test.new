/**
 * Created by Ломачук on 10.06.2015.
 */

$(document).ready(function(){
    $('.custom1').owlCarousel({
        dots: true,
        items:1,
        loop: true,
        autoHeight:true,
        smartSpeed:450
    });
    $(".user-block span").on("click", function(){
        $(this).siblings(".dropdown").slideToggle();
    });
    $(".small-logo").on("click", function(){
        $(this).toggleClass("open")
        var nav = $("nav");
        nav.slideToggle(1000);
        setTimeout(function() {
            if (nav.css("display") == "block" && nav.css("owerflow") != "hidden") {
                nav.css("display", "inline-block")
            }
        }, 1000)
    });
    $(".right-block-mobile").on("click", function(){
        $(".sub-block").slideToggle();
    })
})