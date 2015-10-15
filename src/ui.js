var $ = require('jquery');
var Game = require('./game.js');

$(function() {
    var userSelected, correctSequence;

    Game.updateScore(window.score);

    $('.game-piece').click(function() {
        var elem = $(this);

        userSelected = Game.flashSelectedPiece(elem);
        Game.checkUserCorrect(userSelected, window.correctSequence, window.score, window.click);
    });

    $('.new-game-btn').click(function() {
        Game.updateScore(0);
        window.correctSequence = [];
        Game.flashGamePiece(window.correctSequence);
    });
});