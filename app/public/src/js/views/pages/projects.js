"use strict"; 
$(document).ready(function ($) {


    
    var nineInteriorObjs = [
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



    var template = document.getElementById('nineInteriorHolder-template').innerHTML;
    var renderCarouselItems = Handlebars.compile(template);
    
    // var html = renderCarouselItems();
    var html = renderCarouselItems({
        nineInteriorObjs: nineInteriorObjs
    });
    document.getElementById('nineInteriorHolder').innerHTML = html;

    var amenitiesObjs = [
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



    var template = document.getElementById('amenitiesHolder-template').innerHTML;
    var renderCarouselItems = Handlebars.compile(template);
    
    // var html = renderCarouselItems();
    var html = renderCarouselItems({
        amenitiesObjs: amenitiesObjs
    });
    document.getElementById('amenitiesHolder').innerHTML = html;

    var projectDetailsObjs = [
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



    var template = document.getElementById('projectDetailsHolder-template').innerHTML;
    var renderCarouselItems = Handlebars.compile(template);
    
    // var html = renderCarouselItems();
    var html = renderCarouselItems({
        projectDetailsObjs: projectDetailsObjs
    });
    document.getElementById('projectDetailsHolder').innerHTML = html;


});