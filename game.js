'use strict'

const Referee = require('./referee');
const Player = require('./player');

class Game {
  constructor (x, y, numPlayers, milliseconds) {
  	this.players = [];
  	for (let i = 1; i <= numPlayers; i++) {
  	  this.players.push(new Player(i, x, y));
  	}
  	this.referee = new Referee();
  	this.start = this.start.bind(this, milliseconds);
  }
  start (milliseconds, gameLoop) {
  	this.interval = setInterval(gameLoop, milliseconds);
  	console.log('The game has begun!');
  }
  isOver () {
  	return this.referee.suspendedPlayerNumbers.length === this.players.length - 1;
  }
  announceWinner() {
  	const winner = this.players.find(player => {
  	  return !this.referee.suspendedPlayerNumbers.includes(player.number)
  	});
  	console.log(`Player number ${winner.number} has won the game!`);
  }
  end () {
  	clearInterval(this.interval);
  	console.log('The game has ended');
  }
}

module.exports = Game;