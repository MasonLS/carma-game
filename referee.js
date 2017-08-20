'use strict'

class Referee {
  constructor () {
  	this.suspendedPlayerNumbers = [];
  }
  moveIsIllegal (newPosition, otherPlayers) {
  	const [newX, newY] = newPosition;
  	return otherPlayers.filter(player => !this.suspendedPlayerNumbers.includes(player.number))
  	  .some(player => {
  	    let [playerX, playerY] = player.position;
  	    return Math.abs(newX-playerX) <= 2 
  	      && Math.abs(newY-playerY) <= 2;
  	});
  }
  giveYellowCard (player) {
  	player.yellowCards += 1;
  	console.log(`Player number ${player.number} has received a yellow card.`);
  }
  suspendPlayer (player) {
  	player.timeOut = 0;
    this.suspendedPlayerNumbers.push(player.number);
    console.log(`Player number ${player.number} has been suspended from play.`);
  }
  isEligibleToReenterPlay (player) {
    return player.yellowCards < 4;
  }
  unsuspendPlayer (player) {
  	this.suspendedPlayerNumbers = this.suspendedPlayerNumbers.filter(number => number !== player.number);
  }
}

module.exports = Referee;