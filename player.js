'use strict'

class Player {
  constructor (number, maxX, maxY) {
  	this.number = number;
  	this.position = [
  	  Math.floor(Math.random() * (maxX-2)) + 1, 
  	  Math.floor(Math.random() * (maxY-2)) + 1
  	];
  	this.yellowCards = 0;
  	this.timeOut = 0;
  	this.move = this.move.bind(this, maxX, maxY);
  	this.reenterPlay = this.reenterPlay.bind(this, maxX, maxY);
  }
  move (maxX, maxY) {
  	const [x, y] = this.position;
  	const possibleMoves = [
      [x+1, y],
      [x-1, y],
      [x, y+1],
      [x, y-1]
  	].filter(([x, y]) =>  x > -1 && x < maxX && y > -1 && y < maxY);
  	const randomIndex = Math.floor(Math.random()*(possibleMoves.length-1));
    this.position = possibleMoves[randomIndex];
  }
  askToReenterPlay (referee) {
    if (referee.isEligibleToReenterPlay(this)) {
      referee.unsuspendPlayer(this);
      this.reenterPlay();
    }
  }
  reenterPlay (maxX, maxY,) {
  	this.position = [
  	  Math.floor(Math.random()* (maxX-2)) +1, 
  	  Math.floor(Math.random()* (maxY-2)) +1
  	];
  	console.log(`Player number ${this.number} has left the bench and reentered the game.`);
  }
}

module.exports = Player;