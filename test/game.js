const expect = require('chai').expect;

const Game = require('../game');
const gameLoop = require('../index');

describe('Game', function () {
  
  describe('#isOver', function () {

  	const game = new Game(100, 100, 5, 1000);
  	game.referee.suspendedPlayerNumbers = [1, 2, 3, 4];

  	it('should return TRUE when only one player is NOT suspended', function () {
  	  expect(game.isOver()).to.equal(true);
  	});

  	it('should return FALSE when more than one player is NOT suspended', function () {
  	  game.referee.suspendedPlayerNumbers.pop();
  	  expect(game.isOver()).to.equal(false);
  	});

  });

});