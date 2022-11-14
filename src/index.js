import { isPositiveNumber, roundToTwo, Age } from '../src/js/space-age.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// UI Logic

isPositiveNumber();
roundToTwo();
// Age();

const handleSubmission = (event) => {
  event.preventDefault();
  document.getElementById("response").innerText = "You made it";
  let age = document.getElementById("ageInput").value;
  let lifeExpectancy = document.getElementById("lifeExpectancyInput").value;
  let spaceAges = new Age(age, lifeExpectancy);
  let ul = document.createElement("ul");
  Object.keys(spaceAges).forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element; 
    ul.append(li);
  });
  document.getElementById("response").append(ul);
};

document.getElementById("form").addEventListener("submit", handleSubmission);