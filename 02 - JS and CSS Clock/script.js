

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const secondHand = document.querySelector('.second-hand');
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const min = now.getMinutes();
  const minDegrees = ((min / 60) * 360) + ((seconds/60)*6) + 90;
  const minHand = document.querySelector('.min-hand');
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((min/60) * 30) + 90;
  const hourHand = document.querySelector('.hour-hand');
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);

