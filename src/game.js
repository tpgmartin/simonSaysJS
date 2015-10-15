var $ = require('jquery');

function flashGamePiece (correctSequence) {
    var gamePieces = $('.game-piece');
    var index = Math.floor(Math.random()*4);
    var selected = gamePieces[index];

    correctSequence.push(selected);

    correctSequence.map(function (el, index) {
            setTimeout(function () {
                $(el).toggleClass('game-piece__click');
                setTimeout(function () {
                    $(el).removeClass('game-piece__click');
                }, (index+1)*300);
            }, (index+1)*300);
    });

}

function flashSelectedPiece (elem) {
    elem.toggleClass('game-piece__click');
    setTimeout(function () {
        elem.removeClass('game-piece__click');
    }, 100);

    return elem[0];
}

function checkUserCorrect (userSelected, correctSequence, score, click) {
    if (userSelected === correctSequence[window.click] && click < correctSequence.length-1) {
        window.click += 1;
    } else if (userSelected === correctSequence[window.click]) {
        window.score += 1;
        window.click = 0;
        updateScore(window.score);
        flashGamePiece(correctSequence);
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
