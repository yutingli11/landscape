"use strict";
$(document).ready(function ($) {
    var houseLayoutObjs = [
        {
            p: [{ img: '/img/projects/houseLayout/houseLayout1.jpg', txtHeader: '添加文字1', txtContent: '添加文字1' },
            { img: '/img/projects/houseLayout/houseLayout2.jpg', txtHeader: '添加文字2', txtContent: '添加文字2' },
            { img: '/img/projects/houseLayout/houseLayout3.jpg', txtHeader: '添加文字3', txtContent: '添加文字3' }]
        },
        {
            p: [{ img: '/img/projects/houseLayout/houseLayout4.jpg', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { img: '/img/projects/houseLayout/houseLayout5.jpg', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { img: '/img/projects/houseLayout/houseLayout6.jpg', txtHeader: '添加文字6', txtContent: '添加文字6' }]
        },
        {
            p: [{ img: '/img/projects/houseLayout/houseLayout7.jpg', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: '/img/projects/houseLayout/houseLayout8.jpg', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: '/img/projects/houseLayout/houseLayout9.jpg', txtHeader: '添加文字9', txtContent: '添加文字9' }]
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
            p: [{ img: '/img/projects/gardenDesignRef/1.jpg', txtHeader: '添加文字1', txtContent: '添加文字1' },
            { img: '/img/projects/gardenDesignRef/2.jpg', txtHeader: '添加文字2', txtContent: '添加文字2' },
            { img: '/img/projects/gardenDesignRef/3.jpg', txtHeader: '添加文字3', txtContent: '添加文字3' }]
        },
        {
            p: [{ img: '/img/projects/gardenDesignRef/4.jpg', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { img: '/img/projects/gardenDesignRef/5.jpg', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { img: '/img/projects/gardenDesignRef/6.jpg', txtHeader: '添加文字6', txtContent: '添加文字6' }]
        },
        {
            p: [{ img: '/img/projects/gardenDesignRef/7.jpg', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: '/img/projects/gardenDesignRef/8.jpg', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: '/img/projects/gardenDesignRef/9.jpg', txtHeader: '添加文字9', txtContent: '添加文字9' }]
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
            p: [{ img: '/img/projects/amenities/food/1.jpg', txtHeader: '添加文字1', txtContent: '添加文字1' },
            { img: '/img/projects/amenities/food/2.jpg', txtHeader: '添加文字2', txtContent: '添加文字2' },
            { img: '/img/projects/amenities/food/3.jpg', txtHeader: '添加文字3', txtContent: '添加文字3' }]
        },
        {
            p: [{ img: '/img/projects/amenities/food/4.jpg', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { img: '/img/projects/amenities/food/5.jpg', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { img: '/img/projects/amenities/food/6.jpg', txtHeader: '添加文字6', txtContent: '添加文字6' }]
        },
        {
            p: [{ img: '/img/projects/amenities/fun/1.jpg', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: '/img/projects/amenities/fun/2.jpg', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: '/img/projects/amenities/fun/3.jpg', txtHeader: '添加文字9', txtContent: '添加文字9' }]
        },
        {
            p: [{ img: '/img/projects/amenities/fun/4.jpg', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: '/img/projects/amenities/fun/5.jpg', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: '/img/projects/amenities/fun/6.jpg', txtHeader: '添加文字9', txtContent: '添加文字9' }]
        },
        {
            p: [{ img: '/img/projects/amenities/outdoor/1.jpg', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: '/img/projects/amenities/outdoor/2.jpg', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: '/img/projects/amenities/outdoor/3.jpg', txtHeader: '添加文字9', txtContent: '添加文字9' }]
        },
        {
            p: [{ img: '/img/projects/amenities/outdoor/4.jpg', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: '/img/projects/amenities/outdoor/5.jpg', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: '/img/projects/amenities/outdoor/6.jpg', txtHeader: '添加文字9', txtContent: '添加文字9' }]
        },
        {
            p: [{ img: '/img/projects/amenities/shopping/1.jpg', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: '/img/projects/amenities/shopping/2.jpg', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: '/img/projects/amenities/shopping/3.jpg', txtHeader: '添加文字9', txtContent: '添加文字9' }]
        },
        {
            p: [{ img: '/img/projects/amenities/shopping/4.jpg', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: '/img/projects/amenities/shopping/5.jpg', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: '/img/projects/amenities/shopping/6.jpg', txtHeader: '添加文字9', txtContent: '添加文字9' }]
        },
        {
            p: [{ img: '/img/projects/amenities/travel/1.jpg', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: '/img/projects/amenities/travel/2.jpg', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: '/img/projects/amenities/travel/3.jpg', txtHeader: '添加文字9', txtContent: '添加文字9' }]
        },
        {
            p: [{ img: '/img/projects/amenities/travel/4.jpg', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: '/img/projects/amenities/travel/5.jpg', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: '/img/projects/amenities/travel/6.jpg', txtHeader: '添加文字9', txtContent: '添加文字9' }]
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