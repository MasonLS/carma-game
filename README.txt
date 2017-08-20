INSTALLATION

This is a node project, thus you will need to have a somewhat current version of node installed, as well as npm.

1. Clone the repo from https://github.com/MasonLS/carma-game
2. Run 'npm install' in a terminal.
3. Run 'npm start'.

ASSUMPTIONS

As requested, I have kept these at a minimum:

1. The game ends when all but one player is suspended, as a result of either 2 or 4 yellow cards.
2. When a player reenters play after being suspended, it assumes a new random position on the field. This repositioning consumes their move for the current second.
3. The players move one at a time, as opposed to simultaneously.

DOCUMENTATION

While documentation is nice to have, I believe that it is nonetheless important to write code
that is organized logically and easy to interpret. Where I thought necessary, I included comments
that should help. Each of the "classes" (in Javascript, classes are normal functions, only invoked with the "new" keyword) is encapsulated its own file/module, where you will find definitions of their methods, which I have given what I hope are descriptive names.

TESTS

I used what little time was left of that I had allocated to this project to write a couple of tests, simply to show you that I can write unit tests, which of course I think is an important part of developing web apps. You will notice that I did not hard code numbers into my Game class. This was mainly for testing purposes, as a 100m x 100m game with 10 players at one move per second takes much too long a time in development and testing environments. Regardless whether I got to writing tests, I wanted my code to be testable.