var $ = require('jquery');
var Game = require('./game.js');

$(function() {
    var userSelected, score, correctSequence, click;

    // page load
    score = 0;
    correctSequence = [];
    Game.updateScore(score);

    $('.game-piece').click(function() {
        var elem = $(this);
        click = !!click ? click+1: 0;

        userSelected = Game.flashSelectedPiece(elem);
        Game.checkUserCorrect(userSelected, correctSequence, score, click);
    });

    $('.new-game-btn').click(function() {
        Game.updateScore(score);
        correctSequence = [];
        Game.flashGamePiece(correctSequence);
    });
});