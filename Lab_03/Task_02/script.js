"use strict";

const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("todoList");

function makeItem(text) {
  const li = document.createElement("li");
  li.className = "item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.className = "taskText";
  span.textContent = text;

  const del = document.createElement("button");
  del.type = "button";
  del.className = "deleteBtn";
  del.textContent = "🗑";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) li.classList.add("done");
    else li.classList.remove("done");
  });

  del.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(del);

  return li;
}

function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  list.appendChild(makeItem(text));
  input.value = "";
  input.focus();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

input.focus();
