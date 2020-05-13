"use strict"; // Start of use strict
$(document).ready(function ($) {
    var galleryObjs = [
        {
            p: [
                { img: '/img/gallery/1.jpg', txtHeader: 'one', txtContent: '' },
                { img: '/img/gallery/2.jpg', txtHeader: 'two', txtContent: '' },
                { img: '/img/gallery/3.jpg', txtHeader: 'three', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/gallery/4.jpg', txtHeader: 'four', txtContent: '' },
                { img: '/img/gallery/5.jpg', txtHeader: 'five', txtContent: '' },
                { img: '/img/gallery/6.jpg', txtHeader: 'six', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/gallery/7.jpg', txtHeader: 'seven', txtContent: '' },
                { img: '/img/gallery/8.jpg', txtHeader: 'eight', txtContent: '' },
                { img: '/img/gallery/9.jpg', txtHeader: 'nine', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/gallery/10.jpg', txtHeader: 'ten', txtContent: '' },
                { img: '/img/gallery/11.jpg', txtHeader: 'eleven', txtContent: '' },
                { img: '/img/gallery/12.jpg', txtHeader: 'twelve', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/gallery/13.jpg', txtHeader: 'thirteen', txtContent: '' },
                { img: '/img/gallery/14.jpg', txtHeader: 'fourteen', txtContent: '' },
                { img: '/img/gallery/15.jpg', txtHeader: 'fifteen', txtContent: '' }
            ]
        },
        {
            p: [
                { img: '/img/gallery/16.jpg', txtHeader: 'sixteen', txtContent: '' },
                { img: '/img/gallery/17.jpg', txtHeader: 'seventeen', txtContent: '' },
                { img: '/img/gallery/18.jpg', txtHeader: 'eighteen', txtContent: '' }
            ]
        }
    ];
    var template = document.getElementById('galleryHolder-template').innerHTML;
    var renderCarouselItems = Handlebars.compile(template);
    // var html = renderCarouselItems();
    var html = renderCarouselItems({
        galleryObjs: galleryObjs
    });
    document.getElementById('galleryHolder').innerHTML = html;


    /*    var landscapeSketchObjs = [
            {
                p: [{ img: 'http://placehold.it/380?text=1', txtHeader: '添加文字1', txtContent: '添加文字1' },
                { img: 'http://placehold.it/380?text=2', txtHeader: '添加文字2', txtContent: '添加文字2' },
                { img: 'http://placehold.it/380?text=3', txtHeader: '添加文字3', txtContent: '添加文字3' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { img: 'http://placehold.it/380?text=5', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { img: 'http://placehold.it/380?text=6', txtHeader: '添加文字6', txtContent: '添加文字6' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=7', txtHeader: '添加文字7', txtContent: '添加文字7' },
                { img: 'http://placehold.it/380?text=8', txtHeader: '添加文字8', txtContent: '添加文字8' },
                { img: 'http://placehold.it/380?text=9', txtHeader: '添加文字9', txtContent: '添加文字9' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=10', txtHeader: '添加文字7', txtContent: '添加文字7' },
                { img: 'http://placehold.it/380?text=11', txtHeader: '添加文字8', txtContent: '添加文字8' },
                { img: 'http://placehold.it/380?text=12', txtHeader: '添加文字9', txtContent: '添加文字9' }]
            }
        ];
        var template = document.getElementById('landscapeSketchHolder-template').innerHTML;
        var renderCarouselItems = Handlebars.compile(template);
        // var html = renderCarouselItems();
        var html = renderCarouselItems({
            landscapeSketchObjs: landscapeSketchObjs
        });
        document.getElementById('landscapeSketchHolder').innerHTML = html;
    
    
        var architecturalBeautyObjs = [
            {
                p: [{ img: 'http://placehold.it/380?text=1', txtHeader: '添加文字1', txtContent: '添加文字1' },
                { img: 'http://placehold.it/380?text=2', txtHeader: '添加文字2', txtContent: '添加文字2' },
                { img: 'http://placehold.it/380?text=3', txtHeader: '添加文字3', txtContent: '添加文字3' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { img: 'http://placehold.it/380?text=5', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { img: 'http://placehold.it/380?text=6', txtHeader: '添加文字6', txtContent: '添加文字6' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=7', txtHeader: '添加文字7', txtContent: '添加文字7' },
                { img: 'http://placehold.it/380?text=8', txtHeader: '添加文字8', txtContent: '添加文字8' },
                { img: 'http://placehold.it/380?text=9', txtHeader: '添加文字9', txtContent: '添加文字9' }]
            }
        ];
        var template = document.getElementById('architecturalBeautyHolder-template').innerHTML;
        var renderCarouselItems = Handlebars.compile(template);
        // var html = renderCarouselItems();
        var html = renderCarouselItems({
            architecturalBeautyObjs: architecturalBeautyObjs
        });
        document.getElementById('architecturalBeautyHolder').innerHTML = html;
    
    
        var interiorDesignObjs = [
            {
                p: [{ img: 'http://placehold.it/380?text=1', txtHeader: '添加文字1', txtContent: '添加文字1' },
                { img: 'http://placehold.it/380?text=2', txtHeader: '添加文字2', txtContent: '添加文字2' },
                { img: 'http://placehold.it/380?text=3', txtHeader: '添加文字3', txtContent: '添加文字3' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { img: 'http://placehold.it/380?text=5', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { img: 'http://placehold.it/380?text=6', txtHeader: '添加文字6', txtContent: '添加文字6' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=7', txtHeader: '添加文字7', txtContent: '添加文字7' },
                { img: 'http://placehold.it/380?text=8', txtHeader: '添加文字8', txtContent: '添加文字8' },
                { img: 'http://placehold.it/380?text=9', txtHeader: '添加文字9', txtContent: '添加文字9' }]
            }
        ];
        var template = document.getElementById('interiorDesignHolder-template').innerHTML;
        var renderCarouselItems = Handlebars.compile(template);
        // var html = renderCarouselItems();
        var html = renderCarouselItems({
            interiorDesignObjs: interiorDesignObjs
        });
        document.getElementById('interiorDesignHolder').innerHTML = html;
    
    
        var lifestyleObjs = [
            {
                p: [{ img: 'http://placehold.it/380?text=1', txtHeader: '添加文字1', txtContent: '添加文字1' },
                { img: 'http://placehold.it/380?text=2', txtHeader: '添加文字2', txtContent: '添加文字2' },
                { img: 'http://placehold.it/380?text=3', txtHeader: '添加文字3', txtContent: '添加文字3' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { img: 'http://placehold.it/380?text=5', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { img: 'http://placehold.it/380?text=6', txtHeader: '添加文字6', txtContent: '添加文字6' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=7', txtHeader: '添加文字7', txtContent: '添加文字7' },
                { img: 'http://placehold.it/380?text=8', txtHeader: '添加文字8', txtContent: '添加文字8' },
                { img: 'http://placehold.it/380?text=9', txtHeader: '添加文字9', txtContent: '添加文字9' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=10', txtHeader: '添加文字1', txtContent: '添加文字1' },
                { img: 'http://placehold.it/380?text=11', txtHeader: '添加文字2', txtContent: '添加文字2' },
                { img: 'http://placehold.it/380?text=12', txtHeader: '添加文字3', txtContent: '添加文字3' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=13', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { img: 'http://placehold.it/380?text=14', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { img: 'http://placehold.it/380?text=15', txtHeader: '添加文字6', txtContent: '添加文字6' }]
            },
            {
                p: [{ img: 'http://placehold.it/380?text=16', txtHeader: '添加文字7', txtContent: '添加文字7' },
                { img: 'http://placehold.it/380?text=17', txtHeader: '添加文字8', txtContent: '添加文字8' },
                { img: 'http://placehold.it/380?text=18', txtHeader: '添加文字9', txtContent: '添加文字9' }]
            }
        ];
        var template = document.getElementById('lifestyleHolder-template').innerHTML;
        var renderCarouselItems = Handlebars.compile(template);
        // var html = renderCarouselItems();
        var html = renderCarouselItems({
            lifestyleObjs: lifestyleObjs
        });
        document.getElementById('lifestyleHolder').innerHTML = html;
    */
});