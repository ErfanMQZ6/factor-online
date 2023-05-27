let a = document.getElementById("dateElem");

const date = new Date();
const option = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
console.log(date.toLocaleDateString("fa-IR", option));

a.value = date.toLocaleDateString("fa-IR", option);

