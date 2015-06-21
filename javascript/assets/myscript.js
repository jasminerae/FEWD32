//  Definition of the sayHello funtion.
function sayHello(){
  // Body of function.
  alert('Hello Kitty');
}

// Define a function that computes the area of a circle.
function calculateAreaOfCircle(radius){
  return math.PI * radius^2;
}

// Define a function that computes the area of a triangle.
function calculateAreaOfTrianglge(base, height){
  return .5 * base * height;
}

// Define a function that computes simple interest.
function calculateSimpleInterest(principal, rate, time){
  return principal * rate * time;
}

function describeAPerson(){
  var firstname = prompt("What's your first name?");
  var lastname = prompt("What's your last name?");
  var food = prompt("What's your favorite food?");
  console.log(firstname + " " + lastname + " " + "likes" + " " + food + ".");
}

function calculateSum(){
  var sum = parseInt(prompt("Pick a number.", "0")) + parseInt(prompt("Pick another number.", "0"));
  console.log("The sum of your numbers is " + sum + ".");
}

function calculateAverage(){
  var num1 = parseInt(prompt("What's your age?"));
  var num2 = parseInt(prompt("What's your age?"));
  var num3 = parseInt(prompt("What's your age?"));
  var average = (num1 + num2 + num3)/3
  console.log("The average is " + average + ".");
}

function findMaxAge(){
  var age1 = parseInt(prompt("What's your age?"));
  var age2 = parseInt(prompt("What's your age?"));
  var age3 = parseInt(prompt("What's your age?"));
  var age4 = parseInt(prompt("What's your age?"));

  console.log("The greatest age is " + Math.max(age1, age2, age3, age4) + ".")
}

function isEven(){
  var num = prompt("Enter a number.")
  if(num % 2 == 0){
    console.log(num + " is even.")
  } else{
    console.log(num + " is odd.")
  }
}

function convertWeekday(){
  switch (prompt("Enter the day of the week.")){
    case "1": console.log("Monday"); break;
    case "2": console.log("Tuesday"); break;
    case "3": console.log("Wednesday"); break;
    case "4": console.log("Thursday"); break;
    case "5": console.log("Friday"); break;
    case "6": console.log("Saturday"); break;
    case "7": console.log("Sunday"); break;
    default: console.log("No match found.")
  }
}

function bouncer(){
  if((prompt("How old are you?")>=21) && (prompt("Are you male or female?")=="Female")){
    console.log("Come on in!")
  } else{
    console.log("Get out of here!a")
  }
}

function getTicketPrices(){
  var from = prompt("Departure City: SFO, LAX or NYC")
  var to = prompt("Arrival City: SFO, LAX or NYC")

  if(from == to){
    console.log("Please select a valid trip.")
  } else if(from == "NYC" || to == "NYC"){
    console.log("Coast-to-coast flights are $600.")
  } else{
    console.log("West cost flights are $100.")
  }
}