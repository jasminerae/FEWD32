
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function addTwoNumbersChained() {
  
}

// Parameterize and output 'The average between a, b, and c is d'.
function computeAverageAge() {
  var firstAge = 32;
  var secondAge = 44;
  var thirdAge = 26;

  var average = (firstAge + secondAge + thirdAge) / 3;
  console.log(average);
}


function computeMinAge() {
  var firstAge = 32;
  var secondAge = 44;
  var thirdAge = 26;

  var minAge = 9999;

  if (firstAge < minAge) {
    minAge = firstAge;
  }

  if (secondAge < minAge) {
    minAge = secondAge;
  }

  if (thirdAge < minAge) {
    minAge = thirdAge;
  }
  
  console.log(minAge);
}

// 1. Parameterize
// 2. Set maxAge
// 3. Do checks.
// 4. Output "The maximum age of a, b, and c is d".
function computeMaxAge() {

}


// dayOfWeek is an integer between 1 and 7
function smartGreeting(dayOfWeek) {
  if (dayOfWeek == 1) {
    console.log('Happy Monday');
  } else if (dayOfWeek == 2) {
    console.log('Happy Tuesday');
  } else if (dayOfWeek == 3) {
    console.log('Happy Wednesday');
  } else {
    // Of course you can continue to check for Thursday, Friday, Saturday, Sunday ...
    console.log('It is neither Monday nor Tuesday nor Wednesday');
  }
}

// Change to only underage males.
function letInBar(gender, age) {
  // Let in bar if female and 21 and over.
  if (age >= 21 && gender == 'f') {
    console.log('Let em in!');
  } else {
    console.log('Boot em!');
  }

}

function classify(gender, age) {
  if (gender == 'male') {
    if (age < 21) {
      console.log('Underage male.');
    } else if (age >= 21) { // This could also just be 'else'.
      console.log('Adult male.');
    }
  } else if (gender == 'female') {
    if (age < 21) {
      console.log('Underage female.');
    } else if (age >= 21) { // This could also just be 'else'.
      console.log('Adult female.');
    }
  } else {
    console.log('Unknown.');
  }
}

function contains(string, searchString) {
  if (string.indexOf(searchString) == -1) {
    return false;
  } else {
    return true;
  }
}

function validate(firstName, lastName, email) {
 
}

/* 
  In this fictitious example, the only three cities serviced are SFO, JFK, and LAX.
  As a group, make from == 'sfo' and return the costs of flying to both 'jfk' and 'lax'.
  Have the students do the same when from == 'jfk' (returning costs of flying to both 
  'sfo' and 'lax'). The entire purpose is to show how laborious it is to do this without
  better data structures like hash tables/objects, which I'll conveniently introduce on 6/27.
*/
function getFlightCost(from, to) {
  // Error handling.
  if (from == to) {
    return 'Are you that bored?';
  }

  if (from != 'sfo' && from != 'jfk' && from != 'lax') {
    return 'Unrecognized FROM city.';
  }

  if (to != 'sfo' && to != 'jfk' && to != 'lax') {
   return 'Unrecognized TO city.'; 
  }

  if (from == 'sfo') {
    if (to == 'jfk') {
      // Flying from SFO to JFK.
      return 537.34;

    } else if (to == 'lax') {
      // Flying from SFO to LAX.
      return 137.34;
    }
  } else if (from == 'jfk') {
    // Students do it.
  } else if (from == 'lax') {
    // Students do it.
  }
}


