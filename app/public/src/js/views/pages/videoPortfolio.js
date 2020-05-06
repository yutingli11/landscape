"use strict"; // Start of use strict
$(document).ready(function ($) {
    var videosObjs = [
        {
            p: [{ video: '/videos/1.mp4', txtHeader: '添加文字1', txtContent: '添加文字1' },
            { video: '/videos/2.mp4', txtHeader: '添加文字2', txtContent: '添加文字2' },
            { video: '/videos/3.mp4', txtHeader: '添加文字3', txtContent: '添加文字3' }],
            videoCatTitle: ''
        },
        {
            p: [{ video: '/videos/4.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { video: '/videos/5.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { video: '/videos/6.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }],
            videoCatTitle: ''
        },
        {
            p: [{ video: '/videos/7.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { video: '/videos/8.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { video: '/videos/9.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }],
            videoCatTitle: ''
        },
        {
            p: [{ video: '/videos/10.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { video: '/videos/11.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { video: '/videos/12.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }],
            videoCatTitle: ''
        }
    ];
    var template = document.getElementById('videosHolder-template').innerHTML;
    var renderCarouselItems = Handlebars.compile(template);
    // var html = renderCarouselItems();
    var html = renderCarouselItems({
        videosObjs: videosObjs
    });
    document.getElementById('videosHolder').innerHTML = html;


    $(".videos").hover(hoverVideo, hideVideo);

    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }
});