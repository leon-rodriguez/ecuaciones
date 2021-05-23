const boton = document.getElementById("botonCalcular");
let botonMostrarMas = document.getElementById("botonMostrarMas");
let contenedorBotonMostrarMas = document.getElementById(
  "container-boton-mostrarMas"
);
let contenedorPasos = document.getElementById("contenedorPasos");

const resultadoX = document.getElementById("resultadoX");
const resultadoY = document.getElementById("resultadoY");

boton.addEventListener("click", calcular);

function calcular() {
  let x1 = document.getElementById("x1");
  let x2 = document.getElementById("x2");
  let y1 = document.getElementById("y1");
  let y2 = document.getElementById("y2");
  let resultado1 = document.getElementById("resultado1");
  let resultado2 = document.getElementById("resultado2");
  x1 = parseFloat(x1.value);
  x2 = parseFloat(x2.value);
  y1 = parseFloat(y1.value);
  y2 = parseFloat(y2.value);
  console.log(x1, y1, x2, y2);
  resultado1 = parseFloat(resultado1.value);
  resultado2 = parseFloat(resultado2.value);
  let delta = x1 * y2 - x2 * y1;
  console.log("Delta: " + delta);
  let deltaX = resultado1 * y2 - resultado2 * y1;
  console.log("DeltaX: " + deltaX);
  let deltaY = x1 * resultado2 - x2 * resultado1;
  console.log("DeltaY: " + deltaY);
  if (delta == 0 && deltaX == 0 && deltaY == 0) {
    resultadoX.innerHTML = "Infinitos resultados";
    resultadoY.innerHTML = "Infinitos resultados";
  } else if (delta == 0) {
    resultadoX.innerHTML = "No concuerdan los datos";
    resultadoY.innerHTML = "No concueran los datos";
  } else {
    var x = deltaX / delta;
    console.log("X: " + x);
    var y = deltaY / delta;
    console.log("Y: " + y);
    resultadoX.innerHTML = x;
    resultadoY.innerHTML = y;
  }
  botonMostrarMas.style.display = "initial";
  botonMostrarMas.addEventListener("click", mostrarPrimerPaso);
  function mostrarPrimerPaso() {
    estilosPasos();
    contenedorPasos.innerHTML = `
        <div class="contenido-pasos">
            <div>Hallar el valor de delta:</div>
            <div>Formula: X1 * Y2 - X2 * Y1</div>
            <div>Reemplazando: <span>${x1} * ${y2} - ${x2} * ${y1} = ${delta}</span></div>
            <br>
            <div>Hallar el valor de deltaX:</div>
            <div>Formula: Y1 * resultado linea 2 - Y2 * resultado linea 1</div>
            <div>Reemplazando: <span>${y1} * ${resultado2} - ${y2} * ${resultado1} = ${deltaX}</span></div>
            <br>
            <div>Hallar el valor de deltaY:</div>
            <div>Formula: x1 * resultado linea 2 -  X2 * resultado linea 1</div>
            <div>Reemplazando: <span>${x1} * ${resultado2} - ${x2} * ${resultado1} = ${deltaY}</span></div>
            <br>
            <div>Paso final</div>
            <br>
            <div>Hallar valor X</div>
            <div>Formula: deltaX / delta = X</div>
            <div>Reemplazando: ${deltaX} / ${delta} = ${x}</div>
            <br>
            <div>Hallar valor Y</div>
            <div>Formula: deltaY / delta = Y</div>
            <div>Reemplazando: ${deltaY} / ${delta} = ${y}</div>
            <br>
            <div>X = ${x}</div>
            <div>Y = ${y}</div>
        </div>
        `;
  }
}

function estilosPasos() {
  contenedorPasos.style.boxShadow = "3px 3px 3px 3px rgba(0, 0, 0, .5)";
  contenedorPasos.style.padding = "20px";
  contenedorPasos.style.paddingBottom = "30px";
}
