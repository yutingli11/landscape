"use strict"; // Start of use strict
$(document).ready(function ($) {
    $(function () {
        $('.pop').on('click', function () {
            var a = $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal').modal('show');
        });
    });
});