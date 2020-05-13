"use strict"; // Start of use strict
$(document).ready(function ($) {

    var translator = new Translator({
        persist: false,
        languages: ["cn", "en"],
        defaultLanguage: "en",
        detectLanguage: false,
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


    // $('ul.navbar-nav li.dropdown').hover(function () {
    //     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    // }, function () {
    //     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    // });

    $('#projectsDropdownUl.dropdown-menu a').click(function () {
        $('#selectedProjectsTxt').text($(this).text());
    });

    $('#languagesDropdownUl.dropdown-menu a').click(function (e) {
        $('#selectedLanguagesTxt').text($(this).text());
        e.preventDefault();
        translator.load($(this).attr('rel'));
    });

    $('#projectsDropdownListItem').mouseenter(function () {
        $("#projectsDropdownUl").addClass("show");
        $("#projectsDropdownDiv").addClass("show");
        // $("#projectsDropdownCaret").css("aria-expanded", "true");

    });
    $('#languagesDropdownListItem').mouseenter(function () {
        $("#languagesDropdownUl").addClass("show");
        $("#languagesDropdownDiv").addClass("show");
    });

    $('#projectsDropdownListItem').mouseleave(function () {
        $("#projectsDropdownListItem").find(".show").removeClass('show');
        // $("#projectsDropdownCaret").css("aria-expanded", "false");
    });
    $('#languagesDropdownListItem').mouseleave(function () {
        $("#languagesDropdownListItem").find(".show").removeClass('show');
    });



        $('#panelHandle').hover(function() {
            $('#sidePanel').stop(true, false).animate({
                'right': '0px'
            }, 900);
        }, function() {
            jQuery.noConflict();
        });

        jQuery('#sidePanel').hover(function() {
            // Do nothing
        }, function() {

            jQuery.noConflict();
            jQuery('#sidePanel').animate({
                right: '-340px'
            }, 800);

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