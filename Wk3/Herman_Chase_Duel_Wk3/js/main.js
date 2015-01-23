/*Created by Chase Herman on 1/23/15, week one javascript duel, rewritten in a pokemon format */


var p = [       /*establishes player names in an object, as well as their hp and attack strength, all held in an array*/
    {name: "Infernape", hp: 100, minD: 20},
    {name: "Empoleon", hp: 100, minD: 20}
];
var roundN = 1;//round counter var

(function() {//self executing
    console.log("Trainer Gary wants to battle! Gary sent out Empoleon! Go, Infernape!");
    /*tells you gary wants to battle in the console.*/

    var hp1 = document.getElementById("Infernape").querySelector("p");
    var hp2 = document.getElementById("Empoleon").querySelector("p");       //these all set up DOM vars
    var rndNum = document.getElementById("round");
    document.getElementById("fight_btn").addEventListener("click", fight, false);


    function fight(){   //function to be called

        var pdm = [p[0].minD * .5, p[1].minD * .5];
        //*sets min damage to half players' attacks, index 0 for p1*//*


        var dmg = [Math.floor(Math.random() * (p[1].minD - pdm[1]) + pdm[1]), Math.floor(Math.random() * (p[0].minD - pdm[0]) + pdm[0])];
        //*calculates damage done to p1, based on p2's stats using (0.1to1.0*(20-10)+10) in index 0 and vice versa in index 1  *//*

        p[0].hp -= dmg[0];
        //*lowers p1's hp*//*
        p[1].hp -= dmg[1];
        //*lowers p2's hp*//*

        console.log(roundN+ ": " +p[0].name + "'s hp:" + p[0].hp + " " + p[1].name + "'s hp:" + p[1].hp);
        //* console tells you how much health the players have after the turn*//*

        var result = winnerCheck();
        //*creates a ver so the winnercheck() results are easily communicated*//*
        console.log(result);
        //*logs this into the console*//*

        if (result === "no winner") {
            //*checks data to see what to display in the alerts, specifically if it says "no winner" exactly*//*
            //alert("Turn " + turn + " results: " + p1[0] + "'s HP:" + p1[1] + "%, " + p2[0] + "'s HP:" + p2[1] + "%");
            hp1.innerHTML = p[0].name+ ": " +p[0].hp;
            hp2.innerHTML = p[1].name+ ": " +p[1].hp;//changes html to read the results

            rndNum.innerHTML = "Turn "+roundN+" over! No winner yet!"; //changes html above button to say what round it is
            roundN += 1; //increases round number after that

            //*shows the turn and hp percentages, assuming 100 is a percent not a value, logically*//*
        } else {
            //*if winnercheck() produces anything else*//*

            hp1.innerHTML = p[0].name + ": " + p[0].hp;
            hp2.innerHTML = p[1].name + ": " + p[1].hp;     //changes html to read the results
            rndNum.innerHTML = "Turn " + roundN + " over! " + result;       //changes above the button to say the results and round number
            document.getElementById("fight_btn").removeEventListener("click",fight,false); //takes away the ability to run fight()
            document.getElementById("fight_btn").addEventListener("click", done, false); //invokes done() if pushed again.
            function done(){
                window.location.reload(); //forces refresh
            }

        }
    }
}) ();


function winnerCheck() {         //winnercheck establishes what happens if/when someone wins
    var result = "no winner";
        //makes a string value line 31 is looking for
    if (p[0].hp < 1 && p[1].hp < 1) {       //if both die using comparative code
        result = "You both faint";
            //rewrites the var if the last line is true
    } else if (p[0].hp < 1) {              //*checks if p1 is fainted
        result = p[1].name + " wins!";
            //*rewrites the var if the last line is true
    } else if (p[1].hp < 1) {             //*checks if p2 is fainted
        result = p[0].name + " wins!";
            //*rewrites the var appropriately
    }
    if (p[0].hp < -19 || p[1].hp < -19) { //if a turn past the limit is somehow reached, force reload.
        window.location.reload()
    }
    return result;
        //*officially sets the var to the appropriate value after conditionals
}
