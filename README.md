# Rock-Dodge
Simple video game created using javascript, html, and css

This game involves moving a character around a 9 by 9 grid where rocks are falling on random tiles. If the character is touching a rock when it has reached its intended tile, the player loses. If the character dodges a rock, it is reset to a fall on another random tile. As the game progesses, the speed at which the rocks fall increases and so does the amount of rocks that fall, making the game exponentially harder the longer it goes on. 

Here's a short clip of the gameplay:

https://github.com/bobbyroach/Rock-Dodge/assets/110302904/b577b167-a14a-45eb-837c-f7d0093ab65b


## To Play:

1. Put all 4 files of code and the images folder into microsoft visual studio into one folder. 
2. Inside Microsoft Visual Studio, install the extension "live server", by Ritwick Dey.
3. Then, inside the folder, click "go live" at the bottom right of the application.
4. The game should open up on a local browser and be ready for play.


# The Code: 

There are four files that make up this project, an html, css, and two JavaScript files. Most of the work is done in the JavaScript files, script.js and rocks.js. 

The script.js handles the main functions of the game, including: 

- Starting the game 
- Handling key events to move the player
- Constantly checking if the player has lost
- Handling the losing state of the game

The rock.js mostly just handles the rock objects that fall to the ground in the game. This file mainly entails 

- Initializing a certain amount of rocks to start falling and given each rock a tile to fall on
- Handling moving the rocks downward, detecting when they reach their intended tile, and resetting them back to their original position
- Keeping track of how many rocks fall for the score of the game
