var $ = require('jquery');
var Game = require('./game.js');

$(function() {
    var score = 0;
    var correctSequence = [];
    var userSelected;

    $('.game-piece').click(function() {
        var elem = $(this);
        elem.toggleClass('game-piece__click');
        setTimeout(function () {
            elem.removeClass('game-piece__click');
        }, 100);

        userSelected = elem[0];
        Game.checkUserCorrect(userSelected, correctSequence);
    });

    $('.new-game-btn').click(function() {
        Game.flashGamePiece(correctSequence);
    });
});