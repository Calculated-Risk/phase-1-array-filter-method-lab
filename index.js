// Code your solution here
/* findMatching- This function takes an array of drivers' names and a string as arguments, 
and returns the matching list of drivers. The function should be case insensitive.*/

function findMatching(array, string){
  return array.filter(name => name.toLowerCase() == string.toLowerCase());
}

//fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying 
//the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(array, string){
  return array.filter(name => name.slice(0, 2) === string)
}

