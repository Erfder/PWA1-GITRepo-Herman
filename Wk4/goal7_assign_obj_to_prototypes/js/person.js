/**
 * Chase Herman
 * Class: PWA
 * Goal: Goal7
*/
//create a self-executing function.
(function() {
    //create a global window object that contains the person object set by the function
    window.Person = Personfunct;

    //the person object has 2 static variables. Jobs contains 4+ jobs.
    Person.jobs =["Bowler","Janitor","Physician","Shepherd"];
    Person.actions=["Conquering Europe","Playing Chess","Driving a station wagon","Kicking a can","Spying on neighbors","Cataloguing plants","Making maple syrup"];

    //the constructor function is made in this file.
    function Personfunct(chosenname,chosenrow) {
        // It has 4 properties: name, action, job, and row. Randomly picks an action and job from above array
        this.name= chosenname;
        this.action= Person.actions[Math.floor(Math.random()*Person.actions.length)]; //rand num between 0 and the max length of the array
        this.job= Person.jobs[Math.floor(Math.random()*Person.jobs.length)];    //same but with jobs array length
        this.row= chosenrow;

        //using that row, it stores the information so that the HTML can use it.
        document.getElementById("r"+this.row+"c3").innerHTML=this.action; //(goes to doc, gets the id for each row where if this is the third row, it says "r3c3" since all cols will be 3, and writes the action.)
    }



    //Prototyping: An update function goes here.
    Person.prototype.newAct = function() {
        // It changes the action every few seconds, and is called in the other file.
        if(Math.random()<.008){  //generates a rand num. There is a small chance of the following being executed every time the this function is called. I set this to be lower because my actions take a bit longer to read.
            this.action=Person.actions[Math.floor(Math.random()*Person.actions.length)]; //selects a random action
            document.getElementById("r"+this.row+"c3").innerHTML=this.action;
        }
    }

})(); //end self executing function.