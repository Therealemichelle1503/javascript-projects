// // Code your selectRandomEntry function here:
// function selectRandomEntry (arr) {
//   let index = math.floor(arr.length * Math.random());
//   return arr[index];
// }
// let crewIds = [];

// while (crewIds.length < 3) {
//   randomId = selectRandomEntry(idNumbers);
//   if (!crewIds.includes(randomId)) {
//     crewIds.push(randomId);
//   }
// }
// console.log(crewIds);


// // Code your buildCrewArray function here: the arrays will be the randomID and candidate objects
// //do I need to push all the crew objects into a new array?
// //use a loop to check which animal is going to space, push those animals to a crew array and return that array;

// function buildCrewArray (selectedIds, candidates) {
//   let selectedCrew = [];
//   for (let i =0; i < candidates.length; i++) {
//     if (selectedIds.includes(candidates[i].astronautID)) {
//       selectedCrew.push(candidates[i]);
//     }
//   }
//   return selectedCrew;
// }


let idNumbers = [291, 414, 503, 599, 796, 890];


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your selectRandomEntry function here:
function selectRandomEntry (arr) {
  let index = math.floor(arr.length * Math.random());
  return arr[index];
}
let crewIds = [];

while (crewIds.length < 3) {
  randomId = selectRandomEntry(idNumbers);
  if (!crewIds.includes(randomId)) {
    crewIds.push(randomId);
  }
}
console.log(crewIds);


// Code your buildCrewArray function here: the arrays will be the randomID and candidate objects
//do I need to push all the crew objects into a new array?
//use a loop to check which animal is going to space, push those animals to a crew array and return that array;

function buildCrewArray (selectedIds, candidates) {
  let selectedCrew = [];
  for (let i =0; i < candidates.length; i++) {
    if (selectedIds.includes(candidates[i].astronautID)) {
      selectedCrew.push(candidates[i]);
    }
  }
  return selectedCrew;
}

// Code your template literal and console.log statements:
//'____, ____, and ____ are going to space!' with the name of he selected animals
let crew = buildCrewArray (crewIds, animals);

console.log(crew);