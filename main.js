let size = null;
let toppings = "No";

const smallPrice = 7.00;
const mediumPrice = 10.00;
const largePrice = 14.00;
const noToppingPrice = 0.00;
const oneToppingPrice = 2.00;
const twoToppingPrice = 3.00;

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM Content Loaded");
    document.getElementById("small").onclick = selectSize;
    document.getElementById("medium").onclick = selectSize;
    document.getElementById("large").onclick = selectSize;

    document.getElementById("toppings").onchange = selectToppings;

    document.getElementById("submitBtn").onclick = handleSubmission;
})

function selectSize() {
    size = this.value;
}

function selectToppings() {
    toppings = this.value;
}

function handleSubmission() {
    if (size === null) {
        alert("Please select a size");
        return;
    }

    // Calculate costs
    let sizeCost = getSizeCost();
    let toppingsCost = getToppingsCost();
    let totalCost = sizeCost + toppingsCost;
    
    // Fill in order page
    document.getElementById("orderSize").innerText = size + " Pizza --- $" + sizeCost;
    document.getElementById("orderToppings").innerText = toppings + " Toppings --- $" + toppingsCost;
    document.getElementById("orderCost").innerText = "Your total comes out at $" + totalCost;

    // Show order page
    document.getElementById("orderInfo").style.display = "block";
}

function getSizeCost() {
    switch (size) {
        case "Small":
            return smallPrice;
        case "Medium":
            return mediumPrice;
        case "Large":
            return largePrice;
        default: // use most expensive if anything weird happens
            return largePrice;
    }
}

function getToppingsCost() {
    switch (toppings) {
        case "No":
            return noToppingPrice;
        case "One":
            return oneToppingPrice;
        case "Two":
            return twoToppingPrice;
        default: // use most expensive if anything weird happens
            return twoToppingPrice;
    }
}
