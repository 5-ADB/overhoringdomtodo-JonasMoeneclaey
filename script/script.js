const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const winkelsDiv = document.createElement("div")
const winkels = ["geen winkel","colruyt", "aldi", "lidl", "delhaize"]
const voorafIngesteldeTaken = ["appels (colruyt)", "yogurt (aldi)", "oplaadkabel (aldi)","fruitsap (delhaize)"]
const winkelSelect = document.createElement("select")
form.appendChild(winkelSelect)


form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim()
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
  }
});

voorafIngesteldeTaken.forEach((taak) => {
  const li = document.createElement("li")
  li.textContent = taak
  li.addEventListener("click", function () {
    li.classList.toggle("completed");})
  list.appendChild(li)
})
winkels.forEach((winkel) => {
  const optie = document.createElement("option")
  optie.textContent = winkel
  winkelSelect.appendChild(optie)
})
