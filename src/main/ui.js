$ = require('jquery');

$(function() {
    //var game = new Game();

    $('.game-piece').click(function() {
        var elem = $(this);
        elem.toggleClass('game-piece__click');
        setTimeout(function () {
            elem.removeClass('game-piece__click');
        }, 100);
    });

    $('.new-game-btn').click(function() {
        alert('New game started');
    });
});