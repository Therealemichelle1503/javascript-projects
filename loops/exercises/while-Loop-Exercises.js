//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');

let fuel = "";
let astronauts = "";
let altitude = "";


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

let fuelLevel = Number(input.question ("What is the shuttles current fuel level? "));

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
  fuelLevel = Number(input.question("Hmmm...that amount of fuel is not going to work, please fuel her up and indicate the new fuel level. Here's a hint, the fuel level should be between 5000 and 29000. "));
}
console.log("Perfect, we have enough fuel for a shuttle launch!")



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

let numAstronauts = Number(input.question ("How many astronauts are prepared for the mission? "));

while (numAstronauts >= 7) {
  numAstronauts = Number(input.question("That will not work for this mission. Please try again...here's a hint, we can't accomodate more than 6 astronauts. "));
}
console.log("Great, we have enough astronauts for a shuttle launch! ");
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.


while (fuelLevel-100*numAstronauts >= 0) {
  altitude += 50;
  fuelLevel -= 100*numAstronauts;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let output = `The shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
output += " Orbit achieved!";
}
console.log(output);