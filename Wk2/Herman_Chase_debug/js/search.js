// Create privatized scope using a self-executing function  Chase Herman on 1/11/15, this is search engine debug for week 1.
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),    /*This finds html items with the id "results" and assigns the item as a var so js can use it*/
		searchInput = document.forms[0].search,             /*locates a search form in the html and assigns it a var for js*/
		currentSearch = ''                                  /*makes an empty string var, which is completely unused, but we can't fix it due to the instructions?!*/
	;
	
	// Validates search query
	var validate = function(query){        /*assigns the function results to a var based on "query"*/

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){                   /*while there is a space at the beginning of the query...*/
			query = query.substring(1, query.length);   /*...subtract it*/
		}
		while(query.charAt(query.length-1) === " ") {         /*while there is a space at the end...*/
            query = query.substring(0, query.length - 1);
            /*...get rid of it.*/
        }

		// Check search length, must have 3 characters
		if(query.length < 3){                                       /*if you typed less than 3 characters state the line below in an alert*/
			alert("Your search query is too small, try again.");

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();            /*makes the var from line 6 present in the focused form, I think*/
			return;                         /*returns such value as the var "validate" in line 11*/
		}

		search(query);      /*Passes query into the search function...*/
	};
	
	// Finds search matches
	var search = function(query){    /*this is trying to store a var under the name search, where the content of the var is defined by the following function*/
		
		// split the user's search query string into an array
		var queryArray = query.split(" ");   /*changed join to split*/
		
		// array to store matched results from database.js
		var results = [];   /*again, previous line states what it does-- matches results on the other js page*/

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {    /*for as long as there is a word in the db...*/

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
                                /*dbtitleend var is defined by where the pipe in the db titles end and where the url starts*/
            var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);
                                /*dbitem is stated to be a lowercase form of the title*/

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {       /*for every word in the query... */
                var qitem = queryArray[ii].toLowerCase();
                /*...change it to lowercase and store as qitem... */

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);
                /*...locate that to the var array formed in lines 47 and 48*/
                if (compare !== -1) {                                 /*if it's the same as one of the vars...*/
                    results.push(db[i]);
                    /*...results receives the db data array items that matched*/
                }
            }


            results.sort();
            /*makes a function based on results from above*/

            // Check that matches were found, and run output functions
            if (results.length === 0) {     /*if the line is empty (no results)...*/
                noMatch();
                /*...perform the noMatch function*/
            } else {                      /*if it contains anything (match[es])...*/
                showMatches(results);
                /*...use it/them to perform the showMatches function*/
            }
        }
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){               /*creates a var based on teh results of the following function*/
		var html = ''+                      /*creates html, a string var...*/
			'<p>No Results found.</p>'+     /*...saying that...*/
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' /*...and that*/
		;
		resultsDIV.innerHTML = html;        /*put that onto the html page*/
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){    /*creates a var based on results of below function*/
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', /*writes the html var as a string containing results...*/
			title,                   /*...the title...*/
			url                      /*...and the url*/
		;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){       /*goes through the function on line 34's results*/
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');         /*identifies that titles end in a | */
			title = results[i].substring(0, titleEnd);  /*title var is set as the results' actual titles in the db*/
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);       /*url var set as the actual results' urls*/
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; /*links based off of the last two vars created as the ref and text that appear on the screen*/
		}
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.  /*puts the html var into the actual html*/
	};
	
	// The onSubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {        /*when submit/enter is pushed, start the function*/
        var query = searchInput.value;
        /*query text is stored as a var named query. This would have been helpful to be placed 102 lines ago.*/
        validate(query);
        /*runs validate function with the query*/

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
        /*contains all the function and its return values so it doesn't mess anything else up*/
    };

}) ();