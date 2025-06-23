import { fetchUsers } from "./fetchUsers.js";
import { createUserCard, clearCards } from "./domUtils.js";

const allBtn = document.getElementById("load-all");
const filteredBtn = document.getElementById("load-filtered");
const resetBtn = document.getElementById("reset");
const container = document.querySelector(".user-container");
const cardsGrid = document.querySelector('.cards-grid');

function renderCards(users) {
  clearCards();
  users.forEach((user) => {
    const card = createUserCard(user);
    cardsGrid.appendChild(card);
  });
}

allBtn.addEventListener("click", async () => {
  try {
    const users = await fetchUsers();
    renderCards(users);
  } catch (err) {
    console.error("Error loading all users:", err);
  }
});

filteredBtn.addEventListener("click", async () => {
  try {
    const users = await fetchUsers();
    const filteredUsers = users.filter(
      (u) => typeof u.yearsEmployed === 'number' && u.yearsEmployed < 10
    );
    renderCards(filteredUsers);
  } catch (err) {
    console.error("Error loading filtered users:", err);
  }
});

resetBtn.addEventListener("click", () => {
  clearCards();
});

function generateRandomUsers(count = 10) {
  const names = [
    "Alice Smith",
    "Bob Johnson",
    "Carol Lee",
    "David Brown",
    "Emma White",
  ];
  const companies = [
    "Acme Corp",
    "Globex Inc.",
    "Umbrella Corp",
    "Wayne Enterprises",
    "Stark Industries",
  ];

  const users = [];

  for (let i = 1; i <= count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const email = name.toLowerCase().replace(" ", ".") + "@example.com";
    const phone = `555-${Math.floor(100 + Math.random() * 900)}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    const company = companies[Math.floor(Math.random() * companies.length)];
    const years = Math.floor(Math.random() * 21); // 0–20 years

    users.push({
      id: i,
      name,
      email,
      phone,
      company,
      years,
    });
  }

  return users;
}

console.log(JSON.stringify(generateRandomUsers(10), null, 2));
