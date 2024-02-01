let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let chimpanzee = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};


// After you have created the other object literals, add the astronautID property to each one.

superChimpOne.astronautID = 1;
salamander.astronautID = 2;
chimpanzee.astronautID = 3;
beagle["astronautID"] = 4;
tardigrade["astronautID"] = 5;

console.log(superChimpOne);
console.log(salamander);
console.log(chimpanzee);
console.log(beagle);
console.log(tardigrade);

// Add a method
superChimpOne.move = function () {
   return Math.ceil(10 * Math.random());
};
salamander.move = function () {
   return Math.ceil(10 * Math.random());
};
chimpanzee.move = function () {
   return Math.ceil(10 * Math.random());
};
beagle.move = function () {
   return Math.ceil(10 * Math.random());
};
tardigrade.move = function () {
   return Math.ceil(10 * Math.random());
};

console.log(superChimpOne.move()); // 3 steps
console.log(salamander.move()); // 1 step
console.log(chimpanzee.move()); // 3 steps
console.log(beagle.move()); // 6 steps
console.log(tardigrade.move()); // 5 steps 

//Create an array to hold the animal objects.

crewArray = [];
crewArray.push(superChimpOne, salamander, chimpanzee, beagle, tardigrade);
console.log(crewArray);

// Print out the relevant information about each animal.
 
function crewReports() {
   console.log(`${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`);
 }
 return crewReports(superChimpOne);
// // Start an animal race!

function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  console.log(fitnessTest(superChimpOne));
  console.log(fitnessTest(salamander));
  console.log(fitnessTest(chimpanzee));
  console.log(fitnessTest(beagle));
  console.log(fitnessTest(tardigrade));