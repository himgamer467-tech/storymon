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

  const card = document.createElement("div");

  card.className = "card";

  card.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Type:</strong> ${type}</p>
    <p>${description}</p>
    <span class="badge">New Creature</span>
  `;

  gallery.prepend(card);

  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
});
