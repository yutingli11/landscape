"use strict";
$(document).ready(function ($) {
    var houseLayoutObjs = [
        {
            p: [
                { img: '/img/projects/houseLayout/houseLayout1.jpg', txtHeader: 'one', txtContent: '' },
                { img: '/img/projects/houseLayout/houseLayout2.jpg', txtHeader: 'two', txtContent: '' },
                { img: '/img/projects/houseLayout/houseLayout3.jpg', txtHeader: 'three', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/houseLayout/houseLayout4.jpg', txtHeader: 'four', txtContent: '' },
                { img: '/img/projects/houseLayout/houseLayout5.jpg', txtHeader: 'five', txtContent: '' },
                { img: '/img/projects/houseLayout/houseLayout6.jpg', txtHeader: 'six', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/houseLayout/houseLayout7.jpg', txtHeader: 'seven', txtContent: '' },
                { img: '/img/projects/houseLayout/houseLayout8.jpg', txtHeader: 'eight', txtContent: '' },
                { img: '/img/projects/houseLayout/houseLayout9.jpg', txtHeader: 'nine', txtContent: '' }
            ]
        }
    ];
    var template = document.getElementById('houseLayoutHolder-template').innerHTML;
    var renderCarouselItems = Handlebars.compile(template);
    // var html = renderCarouselItems();
    var html = renderCarouselItems({
        houseLayoutObjs: houseLayoutObjs
    });
    document.getElementById('houseLayoutHolder').innerHTML = html;


    var projectDesignObjs = [
        {
            p: [
                { img: '/img/projects/gardenDesignRef/1.jpg', txtHeader: 'one', txtContent: '' },
                { img: '/img/projects/gardenDesignRef/2.jpg', txtHeader: 'two', txtContent: '' },
                { img: '/img/projects/gardenDesignRef/3.jpg', txtHeader: 'three', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/gardenDesignRef/4.jpg', txtHeader: 'four', txtContent: '' },
                { img: '/img/projects/gardenDesignRef/5.jpg', txtHeader: 'five', txtContent: '' },
                { img: '/img/projects/gardenDesignRef/6.jpg', txtHeader: 'six', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/gardenDesignRef/7.jpg', txtHeader: 'seven', txtContent: '' },
                { img: '/img/projects/gardenDesignRef/8.jpg', txtHeader: 'eight', txtContent: '' },
                { img: '/img/projects/gardenDesignRef/9.jpg', txtHeader: 'nine', txtContent: '' }
            ]
        }
    ];
    var template = document.getElementById('projectDesignHolder-template').innerHTML;
    var renderCarouselItems = Handlebars.compile(template);
    // var html = renderCarouselItems();
    var html = renderCarouselItems({
        projectDesignObjs: projectDesignObjs
    });
    document.getElementById('projectDesignHolder').innerHTML = html;


    var amenitiesObjs = [
        {
            p: [
                { img: '/img/projects/amenities/food/1.jpg', txtHeader: 'French restaurant', txtContent: '' },
                { img: '/img/projects/amenities/food/2.jpg', txtHeader: 'Thai restaurant', txtContent: '' },
                { img: '/img/projects/amenities/food/3.jpg', txtHeader: 'Cambodian restaurant', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/amenities/food/4.jpg', txtHeader: 'Chinese hot pot', txtContent: '' },
                { img: '/img/projects/amenities/food/5.jpg', txtHeader: 'Vietnamese restaurant', txtContent: '' },
                { img: '/img/projects/amenities/food/6.jpg', txtHeader: 'Japanese restaurant', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/amenities/fun/1.jpg', txtHeader: 'Gaming', txtContent: '' },
                { img: '/img/projects/amenities/fun/2.jpg', txtHeader: 'Beach volleyball', txtContent: '' },
                { img: '/img/projects/amenities/fun/3.jpg', txtHeader: 'Performance show', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/amenities/fun/4.jpg', txtHeader: 'Open-air cinema', txtContent: '' },
                { img: '/img/projects/amenities/fun/5.jpg', txtHeader: 'Archery', txtContent: '' },
                { img: '/img/projects/amenities/fun/6.jpg', txtHeader: 'Bar street', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/amenities/outdoor/1.jpg', txtHeader: 'Self-driving tour', txtContent: '' },
                { img: '/img/projects/amenities/outdoor/2.jpg', txtHeader: 'Motorbike', txtContent: '' },
                { img: '/img/projects/amenities/outdoor/3.jpg', txtHeader: 'Bike riding', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/amenities/outdoor/4.jpg', txtHeader: 'Mountain climbing', txtContent: '' },
                { img: '/img/projects/amenities/outdoor/5.jpg', txtHeader: 'Boat tour', txtContent: '' },
                { img: '/img/projects/amenities/outdoor/6.jpg', txtHeader: 'Hiking', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/amenities/shopping/1.jpg', txtHeader: 'Kampot Durian', txtContent: '' },
                { img: '/img/projects/amenities/shopping/2.jpg', txtHeader: 'Local Vegetables', txtContent: '' },
                { img: '/img/projects/amenities/shopping/3.jpg', txtHeader: 'Outlet Mall', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/amenities/shopping/4.jpg', txtHeader: 'Seafood Market', txtContent: '' },
                { img: '/img/projects/amenities/shopping/5.jpg', txtHeader: 'Cambodian Crafts', txtContent: '' },
                { img: '/img/projects/amenities/shopping/6.jpg', txtHeader: 'Flower Market', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/amenities/travel/1.jpg', txtHeader: 'Phu Quoc Island', txtContent: '' },
                { img: '/img/projects/amenities/travel/2.jpg', txtHeader: 'Bokor Mountain', txtContent: '' },
                { img: '/img/projects/amenities/travel/3.jpg', txtHeader: 'Kep city', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/projects/amenities/travel/4.jpg', txtHeader: 'Kampot city', txtContent: '' },
                { img: '/img/projects/amenities/travel/5.jpg', txtHeader: 'Koh Rong Island', txtContent: '' },
                { img: '/img/projects/amenities/travel/6.jpg', txtHeader: 'Sihanoukville', txtContent: '' }
            ]
        }
    ];
    var template = document.getElementById('amenitiesHolder-template').innerHTML;
    var renderCarouselItems = Handlebars.compile(template);
    // var html = renderCarouselItems();
    var html = renderCarouselItems({
        amenitiesObjs: amenitiesObjs
    });
    document.getElementById('amenitiesHolder').innerHTML = html;


    // var $item = $('#homevid');
    // var $wHeight = $(window).height();
    // var $wWidth = $(window).width();

    // $item.height($wHeight);
    // $item.width($wWidth);
    // $('#homevid video').height($wHeight);
    // $('#homevid video').width($wWidth);

    // $(window).on('resize', function () {
    //     $wHeight = $(window).height();
    //     $wWidth = $(window).width();
    //     $item.height($wHeight);
    //     $item.width($wWidth);
    //     $('#homevid video').height($wHeight);
    //     $('#homevid video').width($wWidth);
    // });
});