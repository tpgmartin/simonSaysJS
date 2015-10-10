'use strict';

$(function() {
    $('.game-piece').click(function() {
        var elem = $(this);
        elem.toggleClass('game-piece__click');
        setTimeout(function () {
            elem.removeClass('game-piece__click');
        }, 100);
    });
});