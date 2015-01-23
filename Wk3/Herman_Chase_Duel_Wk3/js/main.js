/*Created by Chase Herman on 1/10/15, week one javascript duel, rewritten in a pokemon format */
var button = document.getElementById('fight_btn');
button.addEventListener("click", fight, false);
 /*sets all of the below to be a function that starts on the page load*/

var p = [
    {name: "Empoleon", hp: 100, minD: 20},
    {name: "Infernape", hp: 100, minD: 20}
];
    /*establishes player names in an object, as well as their hp and attack strength, all held in an array*/

function fight(){
    console.log("Trainer Gary wants to battle! Gary sent out Empoleon! Go, Infernape!");
    /*tells you gary wants to battle in the console.*/
    var roundN = 0;
    var hp1 = document.getElementById("Infernape");
    var hp2 = document.getElementById("Empoleon");
    var rndNum = document.getElementById("round_number");


        //*if the turn is less than 11 (to include turn 10, seeing as how it starts on 1), increase it by one. Condensed "Round" into this so that it actually has relevance to put anything in here*//*
    var pdm = [p[0].minD * .5, p[1].minD * .5];
            //*sets min damage to half players' attacks, index 0 for p1*//*


    var dmg = [Math.floor(Math.random() * (p[1].minD - pdm[1]) + pdm[1]), Math.floor(Math.random() * (p[0].minD - pdm[0]) + pdm[0])];
            //*calculates damage done to p1, based on p2's stats using (0.1to1.0*(20-10)+10) in index 0 and vice versa in index 1  *//*

    p[0].hp -= dmg[0];
            //*lowers p1's hp*//*
    p[1].hp -= dmg[1];
            //*lowers p2's hp*//*

    console.log(p[0].name + "'s hp:" + p[0].hp + " " + p[1].name + "'s hp:" + p[1].hp);
            //* console tells you how much health the players have after the turn*//*

    var result = winnerCheck();
            //*creates a ver so the winnercheck() results are easily communicated*//*
    console.log(result);
            //*logs this into the console*//*

    if (result === "no winner") {
                //*checks data to see what to display in the alerts, specifically if it says "no winner" exactly*//*
                //alert("Turn " + turn + " results: " + p1[0] + "'s HP:" + p1[1] + "%, " + p2[0] + "'s HP:" + p2[1] + "%");
        hp1.child.innerHTML = p[0].hp;
        hp2.child.innerhtml = p[1].hp;
        roundN+=1;
        rndNum.child.innerhtml = "Round "+roundN+" results: No winner yet";

                //*shows the turn and hp percentages, assuming 100 is a percent not a value, logically*//*
    } else {
                //*if winnercheck() produces anything else*//*
        alert(result);
                //*alerts with the winnercheck value stored in the var (line 29)*//*
        return false;
                //*stops everything
    }
}


function winnerCheck() {         /*makes the function the var in line 29 is looking for*/
    var result = "no winner";
        /*makes a string value line 31 is looking for*/
    if (p[0].hp < 1 && p[1].hp < 1) {       /*if both die using comparative code*/
        result = "You both faint";
            /*rewrites the var if the last line is true*/
    } else if (p[0].hp < 1) {              /*checks if p1 is fainted*/
        result = p[1].name + " wins!";
            /*rewrites the var if the last line is true*/
    } else if (p[1].hp < 1) {             /*checks if p2 is fainted*/
        result = p[0].name + " wins!";
            /*rewrites the var appropriately*/
    }
    return result;
        /*officially sets the var to the appropriate value after conditionals*/
}