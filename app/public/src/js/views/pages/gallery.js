"use strict"; // Start of use strict

function someFunc() {

    var carouselItemObjs = [
        {
            p: [{ img: 'http://placehold.it/380?text=1', txtHeader: '添加文字1', txtContent: '添加文字1' },
            { img: 'http://placehold.it/380?text=2', txtHeader: '添加文字2', txtContent: '添加文字2' },
            { img: 'http://placehold.it/380?text=3', txtHeader: '添加文字3', txtContent: '添加文字3' }],
            isActive: 'active'
        },
        {
            p: [{ img: 'http://placehold.it/380?text=4', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { img: 'http://placehold.it/380?text=5', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { img: 'http://placehold.it/380?text=6', txtHeader: '添加文字6', txtContent: '添加文字6' }],
            isActive: ''
        },
        {
            p: [{ img: 'http://placehold.it/380?text=7', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: 'http://placehold.it/380?text=8', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: 'http://placehold.it/380?text=9', txtHeader: '添加文字9', txtContent: '添加文字9' }],
            isActive: ''
        }
    ];

    return carouselItemObjs;
}


$(document).ready(function ($) {

    var landscapeSketchObjs = [
        {
            p: [{ img: 'http://placehold.it/380?text=1', txtHeader: '添加文字1', txtContent: '添加文字1' },
            { img: 'http://placehold.it/380?text=2', txtHeader: '添加文字2', txtContent: '添加文字2' },
            { img: 'http://placehold.it/380?text=3', txtHeader: '添加文字3', txtContent: '添加文字3' }],
            isActive: 'active'
        },
        {
            p: [{ img: 'http://placehold.it/380?text=4', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { img: 'http://placehold.it/380?text=5', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { img: 'http://placehold.it/380?text=6', txtHeader: '添加文字6', txtContent: '添加文字6' }],
            isActive: ''
        },
        {
            p: [{ img: 'http://placehold.it/380?text=7', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: 'http://placehold.it/380?text=8', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: 'http://placehold.it/380?text=9', txtHeader: '添加文字9', txtContent: '添加文字9' }],
            isActive: ''
        },
        {
            p: [{ img: 'http://placehold.it/380?text=10', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: 'http://placehold.it/380?text=11', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: 'http://placehold.it/380?text=12', txtHeader: '添加文字9', txtContent: '添加文字9' }],
            isActive: ''
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
            { img: 'http://placehold.it/380?text=3', txtHeader: '添加文字3', txtContent: '添加文字3' }],
            isActive: 'active'
        },
        {
            p: [{ img: 'http://placehold.it/380?text=4', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { img: 'http://placehold.it/380?text=5', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { img: 'http://placehold.it/380?text=6', txtHeader: '添加文字6', txtContent: '添加文字6' }],
            isActive: ''
        },
        {
            p: [{ img: 'http://placehold.it/380?text=7', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: 'http://placehold.it/380?text=8', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: 'http://placehold.it/380?text=9', txtHeader: '添加文字9', txtContent: '添加文字9' }],
            isActive: ''
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
            { img: 'http://placehold.it/380?text=3', txtHeader: '添加文字3', txtContent: '添加文字3' }],
            isActive: 'active'
        },
        {
            p: [{ img: 'http://placehold.it/380?text=4', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { img: 'http://placehold.it/380?text=5', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { img: 'http://placehold.it/380?text=6', txtHeader: '添加文字6', txtContent: '添加文字6' }],
            isActive: ''
        },
        {
            p: [{ img: 'http://placehold.it/380?text=7', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: 'http://placehold.it/380?text=8', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: 'http://placehold.it/380?text=9', txtHeader: '添加文字9', txtContent: '添加文字9' }],
            isActive: ''
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
            { img: 'http://placehold.it/380?text=3', txtHeader: '添加文字3', txtContent: '添加文字3' }],
            isActive: 'active'
        },
        {
            p: [{ img: 'http://placehold.it/380?text=4', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { img: 'http://placehold.it/380?text=5', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { img: 'http://placehold.it/380?text=6', txtHeader: '添加文字6', txtContent: '添加文字6' }],
            isActive: ''
        },
        {
            p: [{ img: 'http://placehold.it/380?text=7', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: 'http://placehold.it/380?text=8', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: 'http://placehold.it/380?text=9', txtHeader: '添加文字9', txtContent: '添加文字9' }],
            isActive: ''
        },
        {
            p: [{ img: 'http://placehold.it/380?text=10', txtHeader: '添加文字1', txtContent: '添加文字1' },
            { img: 'http://placehold.it/380?text=11', txtHeader: '添加文字2', txtContent: '添加文字2' },
            { img: 'http://placehold.it/380?text=12', txtHeader: '添加文字3', txtContent: '添加文字3' }],
            isActive: 'active'
        },
        {
            p: [{ img: 'http://placehold.it/380?text=13', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { img: 'http://placehold.it/380?text=14', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { img: 'http://placehold.it/380?text=15', txtHeader: '添加文字6', txtContent: '添加文字6' }],
            isActive: ''
        },
        {
            p: [{ img: 'http://placehold.it/380?text=16', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: 'http://placehold.it/380?text=17', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: 'http://placehold.it/380?text=18', txtHeader: '添加文字9', txtContent: '添加文字9' }],
            isActive: ''
        }
    ];



    var template = document.getElementById('lifestyleHolder-template').innerHTML;
    var renderCarouselItems = Handlebars.compile(template);
    
    // var html = renderCarouselItems();
    var html = renderCarouselItems({
        lifestyleObjs: lifestyleObjs
    });
    document.getElementById('lifestyleHolder').innerHTML = html;

});