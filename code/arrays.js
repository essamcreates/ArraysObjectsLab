/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */

count = stations.push('London Kings Cross')
console.log(count); // should return 9
console.log(stations); 



/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */

firstElement = stations.shift();

console.log(stations);



/**
 * Q3.
 * How many stations are on the line?
 */

stationCount = stations.length;

console.log("There are " + stationCount + " stations."); 



/**
 * Q4.
 * Which station is the third stop?
 */

thirdStation = stations [2]; 

console.log("The third station is " + thirdStation);



/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */

console.log("Index of North Berwick; ", stations.indexOf('North Berwick')); // This method returns the index of the element we want to change


stations [1] = "Berwick-upon-Tweed" // We now use the index element and enter our changes into the string

console.log(stations);



/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */

console.log("Index of Leeds; ", stations.indexOf('Leeds')); // This returns an index of 4 

removed = stations.splice(4, 1)

console.log(stations); 



/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 */

console.log("Index of Newcastle and York; ", stations.indexOf('Newcastle'), stations.indexOf('York')); // This returns an index of 2, 3 

added = stations.splice(3, 0, "Darlington")

console.log(stations); 



/**
 * Q8.
 * Is Durham one of the stops?
 */

stoppingAtDurham = stations.includes("Durham");

console.log(stoppingAtDurham); // should return a false since Durham isn't on the Array

console.log("Index of Durham: ", stations.indexOf('Durham')); 


/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
*/

if (stations.includes("Durham")) {
    console.log("Yay Durham!");
} else {
    console.log("Aww...");
}
 
