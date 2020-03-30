alert("hello");

// Calculating the tip
function calculateTip() {
    var moneyAmount = document.getElementById("moneyAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numOfPeople = document.getElementById("PeopleAmount").value;

if(moneyAmount === "" || serviceQuality == 0){
    alert("Please enter the bill amount and the service ");
    return;
}
alert(moneyAmount);
alert(serviceQuality);
alert(numOfPeople);
alert(total);
}

//Calculate the tip

var total = (moneyAmount * serviceQuality) + numOfPeople;


//Display the tip
document.getElementById("tip").innerHTML = total;

//click to call the function

document.getElementById("calculate").onclick = function() {
    calculateTip();
};
