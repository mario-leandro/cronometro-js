let hora = 0;
let minuto = 0;
let segundo = 0;
let milesimo = 0;

let cronometro;

document.form_main.play.onclick = () => play();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function play() {
  pause();
  cronometro = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cronometro);
}

function reset() {
  hora = 0;
  minuto = 0;
  segundo = 0;
  milesimo = 0;
  document.getElementById('horas').innerText = '00';
  document.getElementById('minutos').innerText = '00';
  document.getElementById('segundos').innerText = '00';
  document.getElementById('milesimos').innerText = '000';
}

function timer() {
  if ((milesimo += 10) == 1000) {
    milesimo = 0;
    segundo++;
  }
  if (segundo == 60) {
    segundo = 0;
    minuto++;
  }
  if (minuto == 60) {
    minuto = 0;
    hora++;
  }
  document.getElementById('horas').innerText = returnData(hora);
  document.getElementById('minutos').innerText = returnData(minuto);
  document.getElementById('segundos').innerText = returnData(segundo);
  document.getElementById('milesimos').innerText = returnData(milesimo);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}