//Snowfall code modified from https://dev.to/j471n/colorful-rain-with-js-514j

const snowContainer = document.querySelector(".snow-container");

const background = "white";

const amount = 100;

let i = 0;
let flake, snowflakeProperties;

while (i < amount) {

  const flake = document.createElement("i");

  const snowflakeProperties = {
    width: "5px",
    posX: Math.floor(Math.random() * window.innerWidth) + "px",
    posY: Math.floor(Math.random() * window.innerHeight) + "px",
    delay: Math.random() * -20 + "s",
    duration: Math.random() * 25 + "s",
    bg: background,
    opacity: Math.random() + 0.2
  };

  flake.style.width = snowflakeProperties.width;
  flake.style.left = snowflakeProperties.posX;
  flake.style.right = snowflakeProperties.posY
  flake.style.animationDelay = snowflakeProperties.delay;
  flake.style.animationDuration = snowflakeProperties.duration;
  flake.style.background = snowflakeProperties.bg;
  flake.style.opacity = snowflakeProperties.opacity;

  snowContainer.appendChild(flake);
  i++;
}