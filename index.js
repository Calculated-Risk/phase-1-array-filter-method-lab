// Code your solution here
/* findMatching- This function takes an array of drivers' names and a string as arguments, 
and returns the matching list of drivers. The function should be case insensitive.*/

function findMatching(array, string){
  return array.filter(name => name.toLowerCase() == string.toLowerCase());
}

//fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying 
//the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(array, string){
  let firstLetter = array.filter(name => name.slice(0, 2) === string)
  return firstLetter;
}

//matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. 
//The function should return each element whose name property matches the provided string argument.

function matchName(array, string){
  return array.filter(name => name.name === string)
}

