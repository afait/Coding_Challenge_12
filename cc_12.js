// Task 1 - Created Revenue Metric Card

const dashboard = document.getElementById('dashboard');
const dashboard2 = document.querySelector(`#dashboard`);
// Use document.getElementById and document.querySelector to select the dashboard container
function createMetricCard(id, title, initialvalue) { // Created div element to represent the metric card
    let card = document.createElementNS("div");
    card.setAttribute("class", "metric-card"); // Assigns class "metric-card" and id "revenueCard" to the new element
    card.setAttribute("id", id);
    card.innerHTML = `<h3>${title}</h3${title}</h3><p>$${initialvalue}</p>`;
};

createMetricCard("revenueCard", "Revenue", 0); // Make the card title revenue and placeholder value $0
