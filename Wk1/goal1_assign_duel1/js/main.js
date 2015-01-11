/*Created by Chase Herman on 1/10/15, week one javascript duel, rewritten in a pokemon format */

(function() { /*sets all of the below to be a function that starts on the page load*/

    var p1="Empoleon", p2="Infernape";  /*establishes player names in variables*/
    var p1hp=100, p2hp=100;             /*establishes player health*/
    var p1a=20, p2a=20;                 /*creates the attack (or damage or strength) var, which seems unnecessary because for now they are equal*/
    console.log("Trainer Gary wants to battle! Gary sent out Empoleon! Go, Infernape!"); /*tells you gary wants to battle in the console.*/

    function fight() {                  /*Making a function that will be run upon input*/
        alert(p1+ "'s HP:" +p1hp+" %  *START*  " +p2+ "'s HP:" +p2hp+ "%"); /*tells you how much hp they start with in an alert*/
        for (var turn = 1; turn < 11; turn++) {      /*if the turn is less than 11 (to include turn 10, seeing as how it starts on 1), increase it by one. Condensed "Round" into this so that it actually has relevance to put anything in here*/
            var p1dm = p1a * .5;
            /*sets min damage to half player 1's attack*/
            var p2dm = p2a * .5;
            /*sets min damage to half player 2's attack*/
            var dmg1 = Math.floor(Math.random() * (p2a - p2dm) + p2dm);
            /*calculates damage done to p1, based on p2's stats using (0.1to1.0*(20-10)+10)  */
            var dmg2 = Math.floor(Math.random() * (p1a - p1dm) + p1dm);
            /*calculates damage done to p2*/
            p1hp -= dmg1;
            /*lowers p1's hp*/
            p2hp -= dmg2;
            /*lowers p2's hp*/

            console.log(p1 + "'s hp:" + p1hp + " " + p2 + "'s hp:" + p2hp);
            /* console tells you how much health the players have after the turn*/

            var result = winnerCheck();
            /*creates a ver so the winnercheck() results are easily communicated*/
            console.log(result);
            /*logs this into the console*/

            if (result === "no winner") {       /*checks data to see what to display in the alerts, specifically if it says "no winner" exactly*/
                alert("Turn " + turn + " results: " + p1 + "'s HP:" + p1hp + "%, " + p2 + "'s HP:" + p2hp + "%");
                /*shows the turn and hp percentages, assuming 100 is a percent not a value, logically*/
            } else {                          /*if winnercheck() produces anything else*/
                alert(result);
                /*alerts with the winnercheck value stored in the var (line 29)*/
                break;
                /*stops everything*/
            }
        }
    }


    function winnerCheck() {         /*makes the function the var in line 29 is looking for*/
        var result = "no winner";
        /*makes a string value line 31 is looking for*/
        if (p1hp < 1 && p2hp < 1) {       /*if both die using comparative code*/
            result = "You both faint";
            /*rewrites the var if the last line is true*/
        } else if (p1hp < 1) {              /*checks if p1 is fainted*/
            result = p2 + " wins!";
            /*rewrites the var if the last line is true*/
        } else if (p2hp < 1) {             /*checks if p2 is fainted*/
            result = p1 + " wins!";
            /*rewrites the var appropriately*/
        }
        return result;
        /*officially sets the var to the appropriate value after conditionals*/
    }


    fight(); /*runs the actual process instead of defining it like above*/
}) (); /*random closing characters to auto-run the funct*/