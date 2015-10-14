var $ = require('jquery');
var Game = require('./game.js');

$(function() {
    var userSelected, score, correctSequence;

    // page load
    score = 0;
    correctSequence = [];
    Game.updateScore(score);

    $('.game-piece').click(function() {
        var elem = $(this);

        userSelected = Game.flashSelectedPiece(elem);
        Game.checkUserCorrect(userSelected, correctSequence, score);
    });

    $('.new-game-btn').click(function() {
        Game.updateScore(score);
        Game.flashGamePiece(correctSequence);
    });
});