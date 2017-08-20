'use strict'

const Game = require('./game');
/* 
  Initialize a new game instance with 10 players, a size of 100m x 100m,
  where players move every second.
*/
const game = new Game(100, 100, 10, 1000);

// Start the game!
game.start(gameLoop);
// Function to be run each second of play.
function gameLoop () {
  /*
    At the start of each loop, we test whether the game is over
    based on our conditions (only 1 player currently 'in play').
  */
  if (game.isOver()) {
  	game.end();
  	game.announceWinner();
  	return
  }
  /*
    We deal with each player, either moving it 1m in a random direction
    and testing whether such a move has brought it into illegal proximity with another
    player, or, if the player is suspended, testing whether it has been so for 10 seconds.
  */
  game.players.forEach(player => {
  	
  	let isSuspended = game.referee.suspendedPlayerNumbers.includes(player.number);
  	
  	if (isSuspended) {
  	  
  	  if (player.timeOut === 10) {
  	  	player.askToReenterPlay(game.referee);
  	  } else {
  	  	player.timeOut++;
  	  }

  	} else {
  	  
  	  player.move();
  	  
  	  let otherPlayers = game.players.filter(otherPlayer => otherPlayer.number !== player.number);
  	  
  	  if (game.referee.moveIsIllegal(player.position, otherPlayers)) {
  	  	
  	  	game.referee.giveYellowCard(player);
  	  	
  	  	if (player.yellowCards === 2 || player.yellowCards === 4) {
  	  	  game.referee.suspendPlayer(player);
  	  	}

  	  }

  	}

  });

}

module.exports = gameLoop;