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
    // Display Results Heading
    let h2 = document.createElement("h2");
    document.getElementById("response").append(h2);
    h2.innerText = "Your Space Ages";
    // Display spaceAges object data
    let ul = document.createElement("ul");
    Object.keys(spaceAges).forEach((element) => {
      let li = document.createElement("li");
      element.toString("");
      li.innerText = element + ": ";
      // If object property contains object, display all nested information
      if (typeof spaceAges[element] != 'string') {
        Object.keys(spaceAges[element]).forEach((nestedElement) => {
          let nestedUl = document.createElement("ul");
          nestedElement.toString("");
          let nestedLi = document.createElement("li");
          nestedLi.innerText = nestedElement + ": " + spaceAges[element][nestedElement] + " yrs";
          nestedUl.append(nestedLi); 
          li.append(nestedUl);
          ul.append(li);
        });
      } else {
        li.append(spaceAges[element] + " yrs"); 
      }
      ul.append(li);
    });
    document.getElementById("response").append(ul);
    // Make null user input fields
    document.getElementById("ageInput").value = null;
    document.getElementById("lifeExpectancyInput").value = null;
  } 
}

// Listen for submit
window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleSubmission);
});

