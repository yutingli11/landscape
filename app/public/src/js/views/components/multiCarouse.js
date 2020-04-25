"use strict"; // Start of use strict
$(document).ready(function ($) {
    /*
        Carousel
    */
    $('#carousel-example').on('slide.bs.carousel', function (e) {
        /*
            CC 2.0 License Iatek LLC 2018 - Attribution required
        */
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $('.multiCarouselItem').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $('.multiCarouselItem').eq(i).appendTo('.multiCarouselItemInner');
                }
                else {
                    $('.multiCarouselItem').eq(0).appendTo('.multiCarouselItemInner');
                }
            }
        }
    });

});