'use strict';

var Game = require('../main/game.js'),
    assert = require('assert'),
    chai = require('chai'),
    sinon = require('sinon');

describe('Game', function () {
    describe('flashGamePiece', function () {
        it('should choose a game piece randomly', function () {
            var subject = new Game();

            var outcome = subject.flashGamePiece();

            var isFlashed = false;

            assert.equal(true, isFlashed);
        });
    });
});
