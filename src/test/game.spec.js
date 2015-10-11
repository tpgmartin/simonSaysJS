'use strict';

var Game = require('../main/game.js');
var assert = require('assert');

describe('Game', function () {
    describe('flashGamePiece', function () {
        it('should ', function () {
            var subject = new Game();

            var outcome = subject.flashGamePiece();

            console.log(outcome);

            assert.equal(outcome.direction, robot.direction);
        });
    });
});