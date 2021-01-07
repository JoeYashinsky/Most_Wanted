"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people) {
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch (searchType) {
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      searchResults = searchByTraits(people);
      break;
    default:
      app(people); // restart app
      break;
  }

  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. 
  We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    displayPerson(person)
    break;
    case "family":
    // TODO: get person's family
    displayFamily(person, people)
    break;
    case "descendants":
    // TODO: get person's descendants
    displayDescendants(person, people)
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person) {
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person[0].firstName + "\n";
  personInfo += "Last Name: " + person[0].lastName + "\n";
  personInfo += "Gender: " + person[0].gender.charAt(0).toUpperCase() + person[0].gender.slice(1) + "\n";
  personInfo += "DOB: " + person[0].dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + " lb" + "\n";
  personInfo += "Eye Color: " + person[0].eyeColor.charAt(0).toUpperCase() + person[0].eyeColor.slice(1) + "\n";
  personInfo += "Occupation: " + person.occupation.charAt(0).toUpperCase() + person[0].occupation.slice(1) + "\n";

  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

  // function that prompts and validates user input
  function promptFor(question, valid) {
    do {
      var response = prompt(question).trim();
    } while (!response || !valid(response));
    return response;
  }

   // helper function to pass into promptFor to validate yes/no answers
   function yesNo(input) {
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
  }

  // helper function to pass in as default promptFor validation
  function chars(input) {
    return true; // default validation only
  }


function searchByTraits(people){
  let criteriaSearch = promptFor("Which trait would you like to search by? You can choose gender, height, weight, eye color, or occupation", chars);
  let traitSearchResults; 
  switch(criteriaSearch){
    case "gender":
      traitSearchResults = searchByGender(people);
      break;
    case "height":
      traitSearchResults = searchByHeight(people);
      break;
    case "weight":
      traitSearchResults = searchByWeight(people);
      break;
    case "eye color":
      traitSearchResults = searchByEyeColor(people)
      break;
    case "occupation":
      traitSearchResults = searchByOccupation(people)
      break;
    default:
      break;
  }

  return traitSearchResults;
}

  function searchByGender(people) {
    let gender = promptFor("What is the person's gender?", chars);

    let foundPeople = people.filter(function (person) {
      if (person.gender === gender) {
        return true;
      }
      else {
        return false;
      }
    });

    return foundPeople;
  }

  function searchByHeight(people) {
    let height = promptFor("What is the person's height (inches)?", chars);

    let foundPeople = people.filter(function (person) {
      if (person.height === height) {
        return true;
      }
      else {
        return false;
      }
    });

    return foundPeople;
  }

  function searchByWeight(people) {
    let weight = promptFor("What is the person's weight (pounds)?", chars);

    let foundPeople = people.filter(function (person) {
      if (person.weight === weight) {
        return true;
      }
      else {
        return false;
      }
    });

    return foundPeople;
  }

  function searchByEyeColor(people) {
    let eyeColor = promptFor("What is the person's eye color?", chars);

    let foundPeople = people.filter(function (person) {
      if (person.eyeColor === eyeColor) {
        return true;
      }
      else {
        return false;
      }
    });

    return foundPeople;
  }

  function searchByOccupation(people) {
    let occupation = promptFor("What is the person's occupation?", chars);

    let foundPeople = people.filter(function (person) {
      if (person.occupation === occupation) {
        return true;
      }
      else {
        return false;
      }
    });

    return foundPeople;
  }

  
