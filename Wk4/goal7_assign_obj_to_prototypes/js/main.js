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
        var personName=Math.floor(Math.random()*names.length);
        var personFromLoop=new Personfunction(names[personName],i+1); //created after the push method so it has something to push. Calls function in other file using the random name.

        //also assigns a row number in the html table
        populateHTML(personFromLoop.name);
        populateHTML(personFromLoop.job);

        //Every reference gets put in a People array, created above.
        people.push(personFromLoop);
    }


    //create a populateHTML function. This outputs name and job.
    function populateHTML(){

    }


    //An Interval that calls the function below.

    //this function ^^^^.
    function rewrite() {
        //loop through the people array
        people.forEach(function(element){
            //run the function on the other file for each
        })
    }

})(); //end function.