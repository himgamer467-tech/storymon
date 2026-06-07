const createBtn = document.getElementById("createBtn");
const gallery = document.getElementById("gallery");

let creatures =
JSON.parse(localStorage.getItem("storymon")) || [];

function saveCreatures() {
  localStorage.setItem(
    "storymon",
    JSON.stringify(creatures)
  );
}

function updateCounter() {
  document.getElementById("counter").innerText =
    `Total Creatures: ${creatures.length}`;
}

function getTopCreature() {

  if (creatures.length === 0) {
    document.getElementById("topCreature").innerHTML =
      "No creatures yet";
    return;
  }

  let top = creatures.reduce((a, b) =>
    a.score > b.score ? a : b
  );

  document.getElementById("topCreature").innerHTML =
    `
    <h3>${top.name}</h3>
    <p>⭐ Score: ${top.score}</p>
    <p>${top.rarity}</p>
    `;
}

function renderCreatures() {

  gallery.innerHTML = "";

  creatures.forEach((creature) => {

    const card = document.createElement("div");

    card.className = "card creature";

    let rarityColor = "#666";

    if (creature.rarity === "Rare")
      rarityColor = "#3498db";

    if (creature.rarity === "Epic")
      rarityColor = "#9b59b6";

    if (creature.rarity === "Legendary")
      rarityColor = "#f39c12";

    card.innerHTML = `
      <h2>#${creature.id} ${creature.name}</h2>

      <img
        src="${creature.image}"
        alt="${creature.name}"
        class="creature-img"
        onerror="this.src='https://picsum.photos/500/300'"
      >

      <p><strong>Owner:</strong> ${creature.owner}</p>
      <p><strong>Type:</strong> ${creature.type}</p>

      <p><strong>Power:</strong> ${creature.power}</p>
      <p><strong>Score:</strong> ${creature.score}</p>

      <p><strong>HP:</strong> ${creature.hp}</p>
      <p><strong>Attack:</strong> ${creature.attack}</p>
      <p><strong>Defense:</strong> ${creature.defense}</p>
      <p><strong>Speed:</strong> ${creature.speed}</p>

      <p>${creature.description}</p>

      <span
        class="badge"
        style="background:${rarityColor}"
      >
      ${creature.rarity}
      </span>
    `;

    gallery.appendChild(card);
  });

  updateCounter();
  getTopCreature();
}

createBtn.addEventListener("click", () => {

  const name =
    document.getElementById("name").value.trim();

  const owner =
    document.getElementById("owner").value.trim();

  const image =
    document.getElementById("image").value.trim();

  const type =
    document.getElementById("type").value;

  const rarity =
    document.getElementById("rarity").value;

  const description =
    document.getElementById("description").value.trim();

  if (
    !name ||
    !owner ||
    !image ||
    !description
  ) {
    alert("Please fill all fields");
    return;
  }

  let hp =
    Math.floor(Math.random() * 300) + 200;

  let attack =
    Math.floor(Math.random() * 50) + 50;

  let defense =
    Math.floor(Math.random() * 50) + 50;

  let speed =
    Math.floor(Math.random() * 50) + 50;

  if (type === "Fire") {
    attack += 20;
  }

  if (type === "Water") {
    defense += 20;
  }

  if (type === "Earth") {
    hp += 50;
  }

  if (type === "Air") {
    speed += 15;
  }

  if (type === "Shadow") {
    speed += 20;
    attack += 10;
  }

  const power =
    hp + attack + defense + speed;

  const creature = {

    id: creatures.length + 1,

    name,
    owner,
    image,
    type,
    rarity,
    description,

    hp,
    attack,
    defense,
    speed,

    power,

    score:
      Math.floor(Math.random() * 500) + 1
  };

  creatures.push(creature);

  saveCreatures();

  renderCreatures();

  document.getElementById("name").value = "";
  document.getElementById("owner").value = "";
  document.getElementById("image").value = "";
  document.getElementById("description").value = "";
});

renderCreatures();
