/**
 * Chase Herman
 * Class: PWA
 * Goal: Goal7
*/
//create a self-executing function.
(function() {
    //create a global window object that contains the person object
    window.Person = Person;

    //the person object has 2 static variables. Jobs contains 4+ jobs.
    Person.jobs =["Bowler","Janitor","Physician","Shepherd"];
    Person.actions=["Conquering Europe","Playing Chess","Driving a station wagon"];

    //the constructor function is made in this file.
    function Person() {
        // It has 4 properties: name, action, job, and row.
        this.name= ;
        this.action= ;
        this.job= ;
        this.row= ;

        //using that row, it stores the information so that the HTML can use it.
    }
    //Prototyping: An update function goes here.

    // It changes the action every few seconds, and is called in the other file.

})(); //end self executing function.