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
    })
})