let creatureCount = Number(localStorage.getItem("creatureCount")) || 1;

const createBtn = document.getElementById("createBtn");
const gallery = document.getElementById("gallery");
const counter = document.getElementById("counter");

let creatures = JSON.parse(localStorage.getItem("creatures")) || [];

function updateCounter() {
  counter.textContent = `Total Creatures: ${creatureCount}`;
}

function saveData() {
  localStorage.setItem("creatures", JSON.stringify(creatures));
  localStorage.setItem("creatureCount", creatureCount);
}

function createCreatureCard(creature) {
  const card = document.createElement("div");

  card.className = "card";

  card.innerHTML = `
    <h2>#${String(creature.id).padStart(4, "0")} ${creature.name}</h2>
    <p><strong>Type:</strong> ${creature.type}</p>
    <p>${creature.description}</p>
    <p><strong>Owner:</strong> Guest</p>
    <span class="badge">New Creature</span>
  `;

  gallery.prepend(card);
}

creatures.forEach(createCreatureCard);

updateCounter();

createBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;

  if (!name || !description) {
    alert("Please fill all fields");
    return;
  }

  creatureCount++;

  const creature = {
    id: creatureCount,
    name,
    type,
    description
  };

  creatures.push(creature);

  createCreatureCard(creature);

  saveData();
  updateCounter();

  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
});
