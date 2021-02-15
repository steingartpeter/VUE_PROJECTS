const btnEmnt = document.querySelector("button");
const inpElmnt = document.querySelector("input");
const lstElmnt = document.querySelector("ul");

function addGoal() {
  const entrdVal = inpElmnt.value;
  const listItem = document.createElement("li");
  listItem.textContent = entrdVal;
  lstElmnt.appendChild(listItem);
  inpElmnt.value = "";
}

btnEmnt.addEventListener("click", addGoal);
