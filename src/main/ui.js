var $ = require('jquery');
var Game = require('./game.js');

$(function() {
    var score = 0;

    Game.flashGamePiece();

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