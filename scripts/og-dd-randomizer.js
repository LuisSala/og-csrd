// Fetch data
let fetchData = await fetch("./db/og-dd.json");
let data = await fetchData.json();

//initialize

randomOddityQuality();
randomOddityProperty();
randomOddityForm();

randomOddityQuality();
randomOddityProperty();
randomOddityForm();

randomLocationQuality1();
randomLocationQuality2();
randomLocationType();
randomLocationContents();
randomLocationEncounter();

randomNPCDisposition1();
randomNPCDisposition2();
randomNPCType();
randomNPCPhobia();

// Random Oddity

function randomOddityQuality() {
  let descriptor = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  document.getElementById("oddity-random-quality").innerHTML = descriptor;
}

function randomOddityProperty() {
  let type = data.oddityproperty[Math.floor(Math.random() * data.oddityproperty.length)];
  document.getElementById("oddity-random-property").innerHTML = type;
}

function randomOddityForm() {
  let focus = data.oddityform[Math.floor(Math.random() * data.oddityform.length)];
  document.getElementById("oddity-random-form").innerHTML = focus;
}

function randomLocationQuality1() {
  let descriptor = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  document.getElementById("location-random-quality1").innerHTML = descriptor;
}

function randomLocationQuality2() {
  let descriptor = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  document.getElementById("location-random-quality2").innerHTML = descriptor;
}

function randomLocationType() {
  let descriptor = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  document.getElementById("location-random-type").innerHTML = descriptor;
}

function randomLocationContents() {
  let descriptor = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  document.getElementById("location-random-contents").innerHTML = descriptor;
}

function randomLocationEncounter() {
  let descriptor = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  document.getElementById("location-random-encounter").innerHTML = descriptor;
}

function randomNPCDisposition1() {
  let descriptor = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  document.getElementById("npc-random-disposition1").innerHTML = descriptor;
}

function randomNPCDisposition2() {
  let descriptor = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  document.getElementById("npc-random-disposition2").innerHTML = descriptor;
}

function randomNPCType() {
  let descriptor = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  document.getElementById("npc-random-type").innerHTML = descriptor;
}

function randomNPCPhobia() {
  let descriptor = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  document.getElementById("npc-random-phobia").innerHTML = descriptor;
}

// Listen

document.getElementById("new-random-oddity-quality").addEventListener("click", function (event) {
  randomOddityQuality();
});

document.getElementById("new-random-oddity-property").addEventListener("click", function (event) {
  randomOddityProperty();
});

document.getElementById("new-random-oddity-form").addEventListener("click", function (event) {
  randomOddityForm();
});

document.getElementById("new-random-oddity").addEventListener("click", function (event) {
  randomOddityQuality();
  randomOddityProperty();
  randomOddityForm();  
});

document.getElementById("new-random-location-disposition1").addEventListener("click", function (event) {
  randomNPCDisposition1();
});

document.getElementById("new-random-location-disposition2").addEventListener("click", function (event) {
  randomNPCDisposition2();
});

document.getElementById("new-random-location-type").addEventListener("click", function (event) {
  randomLocationType();
});

document.getElementById("new-random-location-contents").addEventListener("click", function (event) {
  randomLocationContents();
});

document.getElementById("new-random-location-encounter").addEventListener("click", function (event) {
  randomLocationEncounter();
});

document.getElementById("new-random-location").addEventListener("click", function (event) {
  randomLocationQuality1();
  randomLocationQuality2();
  randomLocationType();
  randomLocationContents();
  randomLocationEncounter();
});

document.getElementById("new-random-npc-disposition1").addEventListener("click", function (event) {
  randomNPCDisposition1();
});

document.getElementById("new-random-npc-disposition2").addEventListener("click", function (event) {
  randomNPCDisposition2();
});

document.getElementById("new-random-npc-type").addEventListener("click", function (event) {
  randomNPCType();
});

document.getElementById("new-random-npc-phobia").addEventListener("click", function (event) {
  randomNPCPhobia();
});

document.getElementById("new-random-npc").addEventListener("click", function (event) {
  randomNPCDisposition1();
  randomNPCDisposition2();
  randomNPCType();
  randomNPCPhobia();
});

