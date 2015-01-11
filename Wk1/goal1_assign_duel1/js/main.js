/**
  Created by Chase Herman on 1/10/15, week one javascript duel
 */
var p1="Empoleon", p2="Infernape"; /*establishes player names in variables*/
var p1hp=100, p2hp=100;             /*establishes player health*/
var p1a=20, p2a=20;                 /*creates the attack (or damage or strength) var, which seems unnecessary because for now they are equal*/

function fight() {                  /*Making a function that will be run upon input*/
    for (var turn = 0; turn < 10; turn++) {      /*if the turn is less than 10, increase it by one*/
        var p1dm = p1a * .5;                    /*sets min damage to half player 1's attack*/
        var p2dm = p2a * .5;                    /*sets min damage to half player 2's attack*/
        var dmg1 = Math.floor(Math.random()*(p2a-p2dm)+p2dm);    /*calculates damage done to p1, based on p2's stats using (0.1to1.0*(20-10)+10)  */
        var dmg2 = Math.floor(Math.random()*(p1a-p1dm)+p1dm);    /*calculates damage done to p2*/
        p1hp-=dmg1;     /*lowers p1's hp*/
        p2hp-=dmg2;     /*lowers p2's hp*/

    }
}