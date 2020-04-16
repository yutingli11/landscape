"use strict"; // Start of use strict
$(document).ready(function () {

    var translator = new Translator({
        persist: false,
        languages: ["de", "en", "es"],
        defaultLanguage: "en",
        detectLanguage: true,
        filesLocation: "/src/js/tools/i18n"
    });

    translator.load();

    var el = document.querySelector("form");
    var el1 = document.getElementById('overlayBtn');
    //   document.querySelector("form").addEventListener("click", function(evt) {
    //     if (evt.target.tagName === "INPUT") {
    //       translator.load(evt.target.value);
    //     }
    //   });

    $('.dropdown-menu a').click(function () {
        $('#selectedProjectsLink').text($(this).text());
    });

    $('#selectedProjectsLink').mouseenter(function(){
        $("#projectsDropdownMenu").addClass("show");
        $("#selectedProjectsDiv").addClass("show");
        $("#projectsDropdownCaret").css("aria-expanded", "true");

      });

      $('#projectsDropdownMenu').mouseleave(function(){
        $("#projectsDropdown").find(".show").removeClass('show');
    });


      






    (function ($) {


        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 54)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function () {
            $('.navbar-collapse').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 56
        });

        // Collapse Navbar
        var navbarCollapse = function () {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
            $('.navbar-collapse').collapse('hide');
            $("#projectsDropdown").find(".show").removeClass('show');
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);

    })(jQuery); // End of use strict



});