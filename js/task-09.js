//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bthSpan = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");
btnColor.addEventListener("click", () => {
const color = getRandomHexColor();
document.body.style.backgroundColor = color;
bthSpan.textContent = color;
})

