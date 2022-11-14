import { isPositiveNumber, Age } from '../src/js/space-age.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

// UI Logic

// Handle submission
function handleSubmission() {
  event.preventDefault();
  // Retrieve user inputs
  let inputAge = document.getElementById("ageInput").value;
  let inputLifeExpectancy = document.getElementById("lifeExpectancyInput").value;
  // Validate inputs
  if (isPositiveNumber(inputAge) === false || isPositiveNumber(inputLifeExpectancy) === false) { 
    // Display Error Message
    document.getElementById("response").append("Please enter a valid number.");
  } else {
    // Create age object
    let spaceAges = new Age(inputAge, inputLifeExpectancy);
    // Display Error Message
    document.getElementById("response").append("Success!");
    document.getElementById("response").innerText = spaceAges;

    // let ul = document.createElement("ul");
    // Object.keys(spaceAges).forEach((element) => {
    //   let li = document.createElement("li");
    //   li.innerText = element; 
    //   ul.append(li);
    // });
    // document.getElementById("response").append(ul);
  } 
}

// Listen for submit
window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleSubmission);
});

