# Tic-Tac-Toe Game

This is a simple command-line implementation of the Tic-Tac-Toe game written in C. The game allows two players to take turns marking X and O on a 3x3 game board. The players aim to get three of their marks in a horizontal, vertical, or diagonal line to win the game.

## How to Run

To run the game, follow these steps:

1. Copy the code into a C compiler or IDE (Integrated Development Environment).
2. Compile the code to generate an executable file.
3. Run the executable file in the command-line or console.

## Game Instructions

1. The game starts by displaying an empty game board.
2. Each player takes turns entering the row and column numbers to place their mark (X or O) on the board.
3. The rows and columns are numbered from 1 to 3.
4. If a chosen position on the board is already occupied, the player will be prompted to make another choice.
5. The game continues until one player wins or all positions on the board are filled.
6. A player wins by getting three of their marks in a row, column, or diagonal.
7. If all positions on the board are filled without a winner, the game ends in a draw.

## Game Example

Here's an example of how the game might look during play:

```
                ----------
               |   |   |   |
                ----------
               |   |   |   |
                ----------
               |   |   |   |
                ----------

Joueur numero 1 :
Donner numero de la ligne soit 1, 2, ou 3: 2
Donner numero de la colonne soit 1, 2, ou 3: 2

                ----------
               |   |   |   |
                ----------
               |   | X |   |
                ----------
               |   |   |   |
                ----------

Joueur numero 2 :
Donner numero de la ligne soit 1, 2, ou 3: 1
Donner numero de la colonne soit 1, 2, ou 3: 1

                ----------
               | O |   |   |
                ----------
               |   | X |   |
                ----------
               |   |   |   |
                ----------

...

Joueur 1 a gagne.
```

## Note

This code provides a basic implementation of the Tic-Tac-Toe game. It can be further enhanced by adding error handling, input validation, and additional features such as a replay option or an AI opponent. Feel free to modify and build upon the code to suit your needs.
