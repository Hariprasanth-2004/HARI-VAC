// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js"; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBioU8Xu9iXwKs6BKi5IIPhC5uPQOLvCYU",
  authDomain: "hari-20ea2.firebaseapp.com",
  projectId: "hari-20ea2",
  storageBucket: "hari-20ea2.firebasestorage.app",
  messagingSenderId: "1011049972274",
  appId: "1:1011049972274:web:675a4ca1ec8edcee32f22b",
  measurementId: "G-8NPEJTJNGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value; 
    const email = document.getElementById("email").value;
    const mobilenumber = document.getElementById("mobilenumber").value;
    const addre = document.getElementById("addre").value;

    // Validate required fields
    if (!name || !email || !mobilenumber) {
      alert("Please fill all required fields!");
      return;
    }

    // Create an object to store the appointment data
    const appointmentData = {
      name,
      email,
      mobilenumber,
      addre
    };

    console.log("Appointment Data:", appointmentData);

    // Send data to Firebase
    const appointmentsRef = ref(database, "appointments"); // Reference to 'appointments' in your Firebase DB

    push(appointmentsRef, appointmentData)
      .then(() => {
        alert("Appointment booked successfully!");
        form.reset(); // Clear form after submission
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Failed to book appointment. Please try again.");
      });
  });
});

console.log("Script connected successfully!");
