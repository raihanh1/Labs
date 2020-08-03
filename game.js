let playGame = prompt("Would you like to play a game?");

    if (playGame === null) {
        console.log("Aww, not even once?");
    } else if (playGame.toLowerCase() === "yes") {
        let userHealth = 40;
        let grantHealth = 10;
        let userName = prompt("What is your name?");

        while (!userName) {
            userName = prompt("Please enter your name");
        }

        let wins = 0;
        console.log(`Let's Begin! ${userName}'s Starting Health is ${userHealth}, and Grant's Starting Health is ${grantHealth}`);
        
        while (grantHealth > 0) {
            console.log(`${userName}'s Health: ${userHealth -= Math.floor((Math.random()* 3) + 1)}`);
            console.log(`Grant's Health: ${grantHealth -= Math.floor((Math.random() * 3) + 1)}`);
            
            if (wins >= 3   || grantHealth <= 0) {
                console.log(`Congratulations, ${userName} - you've won!`);
                break;
            } else if (userHealth <= 0) {
                console.log("Game Over Grant won!");
                break;
            } else if (grantHealth <= 0) {
                wins++;
                console.log(`${userName} wins: ${wins}`);
                grantHealth = 10;
            }
        }
    } else if (playGame.toLowerCase() !== "yes") {
        console.log("Thanks, till next time.");
    }