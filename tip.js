// Initializing the variables that store the input from a user
var moneyAmount = document.querySelector("#moneyAmount");
var serviceQuality = document.querySelector("#serviceQuality");
var numOfPeople = document.querySelector("#peopleAmount");

// Initializing a variable for a button and adding a click listener to it
var tip_btn = document.querySelector("#calculate");
tip_btn.addEventListener("click", calculateTip);




// Calculating the tip
function calculateTip() {

    var cost = Number(moneyAmount.value);
    var service = Number(serviceQuality.value);
    var people = Number(numOfPeople.value);
    

     if (cost === 0 || service === 0 || people === 0) {
         alert("Please enter the bill amount, service quality and the number of people ");
         return;
     }

    var total = (cost * service) / people;

    var show = document.querySelector(".tip");
    show.innerHTML = "€" + total.toFixed(2) + " each";
};
