"use strict"; // Start of use strict
// Handlebars.registerHelper('object', function({hash}) {
//     return hash;
//   })
//   Handlebars.registerHelper("arr", (...args) => args.slice(0, -1))

//   Handlebars.registerPartial("lifestyles", Handlebars.templates['../views/components/multiImgCarouselModal']());


$(document).ready(function () {


    
    var carouselItemObjs = someFunc();



    var template = document.getElementById('multiImgCarouselModal-template').innerHTML;
    var renderCarouselItems = Handlebars.compile(template);
    
    // var html = renderCarouselItems();
    var html = renderCarouselItems({
        carouselItems: carouselItemObjs
    });
    document.getElementById('multiImgCarouselModalHolder').innerHTML = html;


});