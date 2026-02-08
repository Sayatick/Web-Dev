"use strict";

alert("hi");

console.log("ok i started");

let myName = "Sayat";
console.log("my name is", myName);

let year = 2026;
console.log("year:", year);

let isTired = true;
console.log("tired?", isTired);

let nothing = null;
let notSet;
console.log("null:", nothing, "undefined:", notSet);

let userAge = 19;
userAge = userAge + 1;
console.log("age after +1:", userAge);

let price = 1500;
let count = 3;
console.log("total:", price * count);

console.log("10" + 5);
console.log(Number("10") + 5);

console.log(Boolean(""));
console.log(Boolean("0"));

console.log(2 > 1);
console.log("2" > 1);
console.log(0 == false);
console.log(0 === false);

let points = 74;
if (points >= 90) {
  console.log("A");
} else if (points >= 75) {
  console.log("B");
} else {
  console.log("C");
}

let access = userAge >= 18 ? "allowed" : "not allowed";
console.log(access);

let nickname = "";
let showName = nickname || "Guest";
console.log("show name:", showName);

let saved = 0;
console.log(saved || 10);
console.log(saved ?? 10);

let maybe = null;
console.log(maybe ?? "default");

let i = 1;
while (i <= 3) {
  console.log("while i:", i);
  i = i + 1;
}

let sum = 0;
for (let k = 1; k <= 5; k = k + 1) {
  sum = sum + k;
}
console.log("sum 1..5:", sum);

let day = 3;
let dayText;
switch (day) {
  case 1:
    dayText = "Mon";
    break;
  case 2:
    dayText = "Tue";
    break;
  case 3:
    dayText = "Wed";
    break;
  default:
    dayText = "Other";
}
console.log(dayText);

function add(a, b) {
  return a + b;
}
console.log(add(4, 9));

let greet = function (name) {
  return "Hi, " + name;
};
console.log(greet("Sayat"));

let mult = (a, b) => a * b;
console.log(mult(6, 7));

function clamp(x, min, max) {
  if (x < min) return min;
  if (x > max) return max;
  return x;
}
console.log(clamp(12, 0, 10));

let user = {
  name: "Sayat",
  age: 19
};
console.log(user.name);

user.city = "Almaty";
console.log(user.city);

let userCopy = user;
userCopy.age = 20;
console.log("same object:", user.age);

let userDeep = structuredClone(user);
userDeep.age = 99;
console.log("clone age:", userDeep.age, "original age:", user.age);

let person = {
  name: "Sayat",
  sayHi() {
    return "hi " + this.name;
  }
};
console.log(person.sayHi());

function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let u = new User("Sayat");
console.log(u.name, u.isAdmin);

let profile = {};
console.log(profile.info?.name);

let id = Symbol("id");
let user2 = { name: "Sayat", [id]: 123 };
console.log(user2[id]);

let wallet = {
  money: 1200,
  valueOf() {
    return this.money;
  }
};
console.log(wallet + 300);

let text = "hello";
console.log(text.toUpperCase());
console.log(text.slice(0, 2));
console.log("JavaScript".includes("Script"));

let num = 1.2345;
console.log(num.toFixed(2));

console.log((0.1 + 0.2).toFixed(2));

let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.at(-1));

let nums = [5, 1, 9, 2];
let sorted = nums.slice().sort((a, b) => a - b);
console.log("sorted:", sorted);

let doubled = sorted.map(n => n * 2);
console.log("doubled:", doubled);

let total = nums.reduce((s, n) => s + n, 0);
console.log("total:", total);

for (let ch of "ok") {
  console.log("char:", ch);
}

let set = new Set([1, 1, 2, 3]);
console.log(set.size);
console.log(set.has(2));

let map = new Map();
map.set("name", "Sayat");
map.set("level", 2);
console.log(map.get("name"));

let wm = new WeakMap();
let obj = { id: 1 };
wm.set(obj, "private");
console.log(wm.get(obj));
obj = null;

let user3 = { name: "Sayat", age: 19 };
console.log(Object.keys(user3));
console.log(Object.values(user3));
console.log(Object.entries(user3));

let user4 = { name: "Sayat", age: 19 };
let { name: n1, age: a1 } = user4;
console.log(n1, a1);

let list = [10, 20, 30];
let [v1, , v3] = list;
console.log(v1, v3);

let now = new Date();
console.log(now.getFullYear());

let d = new Date(2020, 0, 1);
console.log(d.toISOString());

let user5 = { name: "Sayat", age: 19 };
let json = JSON.stringify(user5);
console.log(json);

let back = JSON.parse(json);
console.log(back.name);

let who = prompt("your name?", "");
let sure = confirm("say hi?");
if (sure) {
  alert("Hi, " + (who || "Guest"));
}