// script.js

// Array of gifts/surprises for each day (from Jan 1 to Jan 12)
const surprises = [
  "I HOPE YOU LIKE THIS GIFT, There are physical and digital gifts 💌",
  "PHYSICAL GIFT 01",
  "STEAM GIFT",
  "Cursed selfie coupon",
  "PHYSICAL GIFT 02",
  "A secret message, just for you 🕵️‍♂️",
  "PHYSICAL GIFT 03",
  "A coupon for a movie night 🍿",
  "PHYSICAL GIFT 04 ",
  "LONG AHH LETTER OF REASONS I ADORE YOU",
  "Physical GIFT 05",
  "A countdown timer for your birthday 🎂"
];

// Get the current date (start at Jan 1st)
const today = new Date();
const currentDate = today.getDate(); // Get the current day (1-12)

// Function to create the day boxes dynamically
function createCalendar() {
  const calendarElement = document.querySelector('.calendar');
  for (let i = 1; i <= 12; i++) {
    const dayBox = document.createElement('div');
    dayBox.classList.add('day-box');
    dayBox.textContent = i;

    // If the day is less than or equal to today, reveal the surprise
    if (i <= currentDate) {
      dayBox.addEventListener('click', () => alert(surprises[i - 1]));
    } else {
      dayBox.style.backgroundColor = "#ddd"; // Disable future days
      dayBox.style.pointerEvents = "none"; // Disable clicking
    }

    calendarElement.appendChild(dayBox);
  }
}

// Call the function to render the calendar
createCalendar();
