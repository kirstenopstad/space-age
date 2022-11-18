import { isPositiveNumber, Age } from '../src/js/space-age.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// UI Logic

// Handle submission
function handleSubmission() {
  event.preventDefault();
  let spaceAges = null;
  document.getElementById("response").innerText = null;
  // Retrieve user inputs
  let inputAge = document.getElementById("ageInput").value;
  let inputLifeExpectancy = document.getElementById("lifeExpectancyInput").value;
  // Validate inputs
  if (isPositiveNumber(inputAge) === false || isPositiveNumber(inputLifeExpectancy) === false) { 
    // Display Error Message
    document.getElementById("response").append("Please enter a valid number.");
  } else {
    // Create age object
    spaceAges = new Age(inputAge, inputLifeExpectancy);
    spaceAges.getAges();
    // Display Error Message
    document.getElementById("response").append("Success!");

    let ul = document.createElement("ul");
    // TODO: Fix UI to display ages instead of Object object
    Object.keys(spaceAges).forEach((element) => {
      let li = document.createElement("li");
      if (typeof element === 'object') {
        Object.keys(spaceAges).forEach((nestedElement) => {
          let nestedUl = document.createElement("ul");
          nestedElement.toString("");
          let nestedLi = document.createElement("li");
          nestedElement.innerText = nestedElement + ": " + nestedElement[element] + " yrs";
          nestedUl.append(nestedLi); 
        })
      } else {
        element.toString("")
        li.innerText = element + ": " + spaceAges[element] + " yrs"; 
        ul.append(li);
      }
    });
    document.getElementById("response").append(ul);
  } 
}

// Listen for submit
window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleSubmission);
});

