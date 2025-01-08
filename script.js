let isLightOn = false;

function toggleLight() {
  const bulb = document.querySelector('.bulb');
  const mouth = document.querySelector('.mouth');
  isLightOn = !isLightOn;

  if (isLightOn) {
    bulb.style.boxShadow = '0 0 30px 15px yellow';
    bulb.style.backgroundColor = 'yellow';
    mouth.style.transform = 'scale(1.2) rotate(0deg)'; // Sonrisa
  } else {
    bulb.style.boxShadow = '0 0 0px 0px yellow';
    bulb.style.backgroundColor = '#555';
    mouth.style.transform = 'scale(1) rotate(180deg)'; // Boca dormida
  }
}