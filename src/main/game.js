var $ = require('jquery');

module.exports = {

    flashGamePiece: function () {
        var gamePieces = $('.game-piece');
        var selected = Math.floor(Math.random()*4);

        $(gamePieces[selected]).toggleClass('game-piece__click');
        setTimeout(function () {
            $(gamePieces[selected]).removeClass('game-piece__click');
        }, 100);

    }

};
