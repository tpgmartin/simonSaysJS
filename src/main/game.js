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

function flashSelectedPiece (elem) {
    elem.toggleClass('game-piece__click');
    setTimeout(function () {
        elem.removeClass('game-piece__click');
    }, 100);

    return elem[0];
}

function checkUserCorrect (userSelected, correctSequence, score) {
    if (userSelected === correctSequence[0]) {
        console.log(score);
        score += 1;
        updateScore(score);
        flashGamePiece();
    } else {
        alert('Game Over!');
    }
}

function updateScore (score) {
    $('.game-score').text('Game score: ' + score);
}

module.exports = {
    updateScore: updateScore,
    flashGamePiece: flashGamePiece,
    flashSelectedPiece: flashSelectedPiece,
    checkUserCorrect: checkUserCorrect
};
