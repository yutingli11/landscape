"use strict"; // Start of use strict
// Handlebars.registerHelper('object', function({hash}) {
//     return hash;
//   })
//   Handlebars.registerHelper("arr", (...args) => args.slice(0, -1))

//   Handlebars.registerPartial("lifestyles", Handlebars.templates['../views/components/multiImgCarouselModal']());


$(document).ready(function ($) {
    // var carouselItemObjs = someFunc();
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
    var template = document.getElementById('multiImgCarouselModal-template').innerHTML;
    var renderCarouselItems = Handlebars.compile(template);
    // var html = renderCarouselItems();
    var html = renderCarouselItems({
        carouselItems: carouselItemObjs
    });
    document.getElementById('multiImgCarouselModalHolder').innerHTML = html;
});