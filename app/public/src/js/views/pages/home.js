$(document).ready(function ($) {
    $('.carousel').carousel({
        interval: 30000,
        pause: "true"
    });


    var $item = $('#carouselExampleIndicators .carousel-item');
    var $wHeight = $(window).height();

    $item.height($wHeight);
    $('#carouselExampleIndicators .carousel-item img').height($wHeight);

    $(window).on('resize', function () {
        $wHeight = $(window).height();
        $item.height($wHeight);
        $('#carouselExampleIndicators .carousel-item img').height($wHeight);
    });

});