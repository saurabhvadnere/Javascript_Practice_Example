let date1 = new Date("2024-02-20");
let date2 = new Date("2025-03-20");

let diffTime = date2 - date1;
let diffDays = diffTime / (1000 * 60 * 60 * 24);

console.log(`Difference: ${diffDays} days`);
