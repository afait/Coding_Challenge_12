// Task 1 - Created Revenue Metric Card

document.addEventListener("DOMContentLoaded", function ()) {

const dashboard = document.getElementById('dashboard');
const dashboard2 = document.querySelector(`#dashboard`);

const revenueCard = document.createElement(`div`);

revenueCard.setAttribute(`class`, `metric-card`);
revenueCard.setAttribute(`id`, `revenueCard`);

const title = document.createElement(`h3`);
title.textContent = `Revenue`;
const value = document.createElement(`p`);
value.textcontent = `$0`;

revenueCard.appendChild(title);
revenueCard.appendChild(value);

dashboard1.appendChild(revenueCard);
}
