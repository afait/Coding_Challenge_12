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

