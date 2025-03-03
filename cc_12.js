// Task 1 - Created Revenue Metric Card


const dashboard = document.getElementById("dashboard");
const dashboardSelector = document.querySelector('#dashboard');
// Use document.getElementById and document.querySelector to select the dashboard container
function createMetricCard(id, title, initialvalue) { // Created div element to represent the metric card
    let card = document.createElement("div");
    card.setAttribute("class", "metric-card"); // Assigns class "metric-card" and id "revenueCard" to the new element
    card.setAttribute("id", id);
    card.innerHTML = `<h3>${title}</h3><p>$${initialvalue}</p>`;
    dashboard.appendChild(card);
}

createMetricCard("revenueCard", "Revenue", 0); // Make the card title revenue and placeholder value $0


// Task 2 - Updating Dashboard Metrics - Working with NodeLists and Arrays

createMetricCard("profitCard", "Profit", 0);
createMetricCard("expensesCard", "Expenses", 0); // Including more metric cards on the dashboard

const metricCardList = document.querySelectorAll(".metric-card"); // Uses document.querySelectorAll to select all elements with the class "metric-card"

const metricCardArray = Array.from(metricCardList); // Converts the NodeList into an array

metricCardArray.forEach(card => { // Use the .forEac array
    card.innerHTML += "<p><i> - Updated</i></p>"; // Updates each card's inner text
    card.style.backgroundColor = "blue"; // Modifys the style, changing the background color
});


// Task 3 - Implemented Dynamic Inventory List
const inventoryList = document.getElementById("inventoryList");

function addInventoryItem(product) {
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "product-item"); // add a class, product item
    newLi.addEventListener("click", () => {removeInventoryItem(newLi)});

    inventoryList.appendChild(newLi)
}; // Function creates a new <li> element that represents a product


addInventoryItem("CLICK HERE");
addInventoryItem("Add a product below");

let productForm = document.getElementById('productForm');
let error = document.getElementById('error'); 

productForm.addEventListener('submit', (event) => { // Adding an event listener for when someone clicks the submit button
    let productName = document.getElementById('productName').value; // Stores the inputted content
    if (productName.trim() === '') {
        error.textContent = 'Must Add a Product Name';
        event.preventDefault();
    } else {
        error.textContent = '';
        addInventoryItem(productName);
        event.preventDefault(); // Prevent from submitting
    }
});

function removeInventoryItem(item) {
    inventoryList.removeChild(item);
};


// Task 4 - Business Customer Section - Handling Event Bubbling

const customerCards = document.querySelectorAll(".customer-card"); // selects all elements within the class
    const customerSection = document.getElementById("customerSection"); // uses getElementId to get parent container

    customerCards.forEach(card => { // Goes through customer array cards
        card.addEventListener("click", (event) => {
            console.log(`Clicked ${event.target.textContent}`);
            event.stopPropagation();
        });
    });

    customerSection.addEventListener("click", () => { // Attaches the event listenr to the parent container card
        console.log(`Clicked on Customer Section`); // Gives feedback to user
    })