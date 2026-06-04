let creatureCount = 1;

const createBtn = document.getElementById("createBtn");
const gallery = document.getElementById("gallery");

createBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;

  if (!name || !description) {
    alert("Please fill all fields");
    return;
  }

  creatureCount++;

  const card = document.createElement("div");

  card.className = "card";

  card.innerHTML = `
    <h2>#${String(creatureCount).padStart(4, "0")} ${name}</h2>
    <p><strong>Type:</strong> ${type}</p>
    <p>${description}</p>
    <p><strong>Owner:</strong> Guest</p>
    <span class="badge">New Creature</span>
  `;

  gallery.prepend(card);

  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
});
