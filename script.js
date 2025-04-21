// nav bar toggle 

let menu = document.querySelector("#menu-bar");
let nav = document.querySelector(".nav");

menu.onclick = ()=> {
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
}

// firebase firestre 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMjIChF3g_HuJhKoDj5EDk9fDW0fZwtsY",
  authDomain: "contact-me-2bbfe.firebaseapp.com",
  projectId: "contact-me-2bbfe",
  storageBucket: "contact-me-2bbfe.firebasestorage.app",
  messagingSenderId: "946614680882",
  appId: "1:946614680882:web:bd687fa58c65c53d95eb2b",
  measurementId: "G-KG7W3VP4P8"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
document.getElementById("btn").addEventListener("click", async (e) => {
  e.preventDefault();
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!firstName || !lastName || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }
  try {
    await addDoc(collection(db, "messages"), {
      firstName,
      lastName,
      email,
      message,
      timestamp: new Date()
    });
    alert("Your message has been sent!");
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  } catch (err) {
    console.error("Error adding message: ", err);
    alert("Something went wrong. Please try again later.");
  }
});