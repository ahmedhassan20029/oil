/*global $, window, document */
$(function () {
    'use strict';
    $('.featured ul li').click(function () {
        if ($(this).data('class') === 'all') {
            $('.shufile-img .row div').show();
        } else {
            $('.shufile-img .row div').hide();
            $($(this).data('class')).fadeIn();
        }
    });
    // end shufel img
});