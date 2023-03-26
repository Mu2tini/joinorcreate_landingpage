// Define an array of weekdays and months in Swedish
var weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

export function futureDate() {
// Generate a random date between 5-10 days in the future
var currentDate = new Date();
var futureDate = new Date(currentDate.getTime() + Math.floor(Math.random() * 6 + 5) * 24 * 60 * 60 * 1000);

// Get the day, month, and year of the future date
var day = weekdays[futureDate.getDay()];
var date = futureDate.getDate();
var month = months[futureDate.getMonth()];
var year = futureDate.getFullYear();

// Format the date string
var formattedDate = day + ", " + date + " " + month + " " + year;

// Log the formatted date to the console
return formattedDate;
}
