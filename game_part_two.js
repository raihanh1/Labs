"use strict"; {

    function startGame() {
        let answer = prompt("Would you like to play a game?");

        if (!answer) {
            console.log("Ok, have a nice day");
        } else if (answer.toLowerCase() === "yes") {
            let userName = prompt("What is your character's name?");
            while (!userName) {
                userName = prompt("Please enter a character name to proceed.");
            }
            startCombat(userName);
        } else if (answer.toLowerCase() === "no") {
            console.log("Maybe next time.");
        } 
    }

    function getDamage() {
        return Math.floor(Math.random() * 5 + 1);
    }

    function startCombat(name) {
        let userHealth = 40;
        let grantHealth = 10;
        let wins = 0;
        console.log(`${name}'s Health: ${userHealth}, Grant's Health: ${grantHealth}, ${name}'s Wins: ${wins}`);
        
        while (grantHealth > 0) {
            let userMove = prompt("Would you like to attack or quit?");
            if (!userMove) {
                console.log("You don't want to be a quitter!");
                break;
            } 
            if (userMove.toLowerCase() === "attack") {
                console.log(`${name}'s health is now: ${userHealth -= getDamage()}`);
                console.log(`Grant's Health is now: ${grantHealth -= getDamage()}`);
                if (userHealth <= 0) {
                    console.log("Game over. You lose, Grant wins!");
                    break;
                } else if (grantHealth <= 0) {
                    wins++;
                    if (wins === 3) {
                        console.log("You beat Grant! You are the best!");
                        break;
                    }
                    console.log(`Games ${name} has won: ${wins}. Keep fighting!`);
                    grantHealth = 10;
                }
            } else if (userMove.toLowerCase() === "quit") {
                console.log("Better luck next time!");
                break;
            } else {
                prompt("Please type in attack or quit.")
            }
        }
    }
    startGame();
}