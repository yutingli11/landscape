"use strict"; // Start of use strict
$(document).ready(function ($) {
    var videosObjs = [
        {
            p: [
                { video: '/videos/1.mp4', txtHeader: '添加文字1', txtContent: '添加文字1', bckground: '/videos/1.jpg' },
                { video: '/videos/2.mp4', txtHeader: '添加文字2', txtContent: '添加文字2', bckground: '' },
                { video: '/videos/3.mp4', txtHeader: '添加文字3', txtContent: '添加文字3', bckground: '' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/4.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/5.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/6.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/7.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/8.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/9.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/10.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/11.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/12.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/13.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/14.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/15.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/16.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/17.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/18.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/19.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/20.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/21.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/22.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/23.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/24.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/25.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/26.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/27.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/28.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/29.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/30.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/31.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/32.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/33.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/34.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/35.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/36.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/37.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/38.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/39.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/40.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/41.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/42.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/43.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/44.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/45.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
            videoCatTitle: ''
        },
        {
            p: [
                { video: '/videos/46.mp4', txtHeader: '添加文字4', txtContent: '添加文字4' },
                { video: '/videos/47.mp4', txtHeader: '添加文字5', txtContent: '添加文字5' },
                { video: '/videos/48.mp4', txtHeader: '添加文字6', txtContent: '添加文字6' }
            ],
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


    // $(".videos").hover(hoverVideo, hideVideo);

    // function hoverVideo(e) {
    //     var thisVideo = $('video', this).get(0);
    //     var playPromise = $('video', this).get(0).play();
    //     if (playPromise !== undefined) {
    //         playPromise.then(_ => {
    //             var thisVideoT = $('video', this).get(0);
    //             $('video', this).get(0).muted = false;
    //             // Autoplay started!
    //         }).catch(error => {
    //             console.log("error");
    //             var thisVideoF = $('video', this).get(0);
    //             $('video', this).get(0).play();
    //             // Autoplay was prevented.
    //             // Show a "Play" button so that user can start playback.
    //         });
    //     }

    // }

    // function hideVideo(e) {
    //     var pausePromise = $('video', this).get(0).pause();
    //     if (pausePromise !== undefined) {
    //         pausePromise.then(_ => {
    //             $('video', this).get(0).muted = true;
    //             // Autoplay started!
    //         }).catch(error => {
    //             console.log("error");
    //             $('video', this).get(0).pause();
    //             // Autoplay was prevented.
    //             // Show a "Play" button so that user can start playback.
    //         });
    //     }
    // }



    $(".videos").on({
        mouseenter: function () {
            var playPromise = $('video', this).get(0).play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Automatic playback started!
                // Show playing UI.
                // We can now safely pause video...
                // $('video', this).get(0).muted = false;
            })
                .catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.
                });
        }
        },
        mouseleave: function () {
            $('video', this).get(0).pause();
        }
    });

    // var promise = document.querySelector('video').play();


});