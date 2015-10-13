var $ = require('jquery');

function flashGamePiece (correctSequence) {
    var gamePieces = $('.game-piece');
    var index = Math.floor(Math.random()*4);
    var selected = gamePieces[index];

    $(selected).toggleClass('game-piece__click');
    setTimeout(function () {
        $(selected).removeClass('game-piece__click');
    }, 100);

    correctSequence.push(selected);
    return correctSequence;

}

function checkUserCorrect (userSelected, correctSequence) {
    if (userSelected === correctSequence[0]) {
        flashGamePiece();
    } else {
        alert('Game Over!');
    }
}

module.exports = {
    flashGamePiece: flashGamePiece,
    checkUserCorrect: checkUserCorrect
};
