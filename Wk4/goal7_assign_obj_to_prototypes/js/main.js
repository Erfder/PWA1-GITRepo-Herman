/**
 * Chase Herman
 * Class: PWA
 * Goal: Goal7
*/
//create a self executing function
(function() {
    //an array called names that contains at least 5 people
    var names = ['Mitch', 'Jerome', 'Ashley', 'Preston', 'Rob'],
    people=[]
    ;

    //create three instances of Person using a for loop.
    for(var i=0;i<3;i++) {
        //names are being randomly sent to the constructor
        var randName=Math.floor(Math.random()*names.length);
        var personFromLoop=new Person(names[randName],i+1); //created after the push method so it has something to push. Calls function in other file using the random name.

        //also assigns a row number in the html table
        populateHTML(personFromLoop.name,"r"+(i+1)+"c1");   //i+1 because the array starts at 0 and tables don't
        populateHTML(personFromLoop.job,"r"+(i+1)+"c2");    //c# is col, 1 for name 2 for job.

        //Every reference gets put in a People array, created above.
        people.push(personFromLoop);
        names.splice(randName,1); //prevents duplicate names
    }


    //create a populateHTML function. This outputs name and job.
    function populateHTML(displayName,correspondingRow){
        document.getElementById(correspondingRow).innerHTML=displayName
    }


    //An Interval that repeats using rewrite()
    var interval;
    clearInterval(interval);
    interval = setInterval(rewrite, 1000 / 30);

    //this function ^^^^.
    function rewrite() {
        //loop through the people array
        people.forEach(function(element){

            //run the function on the other file for each
            element.newAct();
        })
    }

})(); //end function.