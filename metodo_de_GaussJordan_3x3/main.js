let x1 = document.getElementById("x1");
let y1 = document.getElementById("y1");
let z1 = document.getElementById("z1");
let x2 = document.getElementById("x2");
let y2 = document.getElementById("y2");
let z2 = document.getElementById("z2");
let x3 = document.getElementById("x3");
let y3 = document.getElementById("y3");
let z3 = document.getElementById("z3");
let resultadoLinea1 = document.getElementById("resultado1");
let resultadoLinea2 = document.getElementById("resultado2");
let resultadoLinea3 = document.getElementById("resultado3");
const calcular = document.getElementById("botonCalcular");
let resultadoFinalX = document.getElementById("resultadoX");
let resultadoFinalY = document.getElementById("resultadoY");
let resultadoFinalZ = document.getElementById("resultadoZ");

calcular.addEventListener("click", calcular3x3);


function calcular3x3(){
    x1 = parseInt(x1.value);
    y1 = parseInt(y1.value);
    z1 = parseInt(z1.value);
    x2 = parseInt(x2.value);
    y2 = parseInt(y2.value);
    z2 = parseInt(z2.value);
    x3 = parseInt(x3.value);
    y3 = parseInt(y3.value);
    z3 = parseInt(z3.value);
    resultadoLinea1 = parseInt(resultadoLinea1.value);
    resultadoLinea2 = parseInt(resultadoLinea2.value);
    resultadoLinea3 = parseInt(resultadoLinea3.value);
    const x1Constante = x1;
    const y1Constante = y1;
    const z1Constante = z1;
    const resultado1Constante = resultadoLinea1;
    
    
    // primer paso
    const x1Multiplicacion = x1 * -1;
    const x2Multiplicacion = x2;

    x1 = x1 * x2Multiplicacion;
    y1 = y1 * x2Multiplicacion;
    z1 = z1 * x2Multiplicacion;
    resultadoLinea1 = resultadoLinea1 * x2Multiplicacion;

    x2 = x2 * x1Multiplicacion;
    y2 = y2 * x1Multiplicacion;
    z2 = z2 * x1Multiplicacion;
    resultadoLinea2 = resultadoLinea2 * x1Multiplicacion;

    x2 = x1 + x2;
    y2 = y1 + y2;
    z2 = z1 + z2;
    resultadoLinea2 = resultadoLinea1 + resultadoLinea2;

    x1 = x1Constante;
    y1 = y1Constante;
    z1 = z1Constante;
    resultadoLinea1 = resultado1Constante; 
    // fin primer paso de pasar x2 a 0

    // paso 2
    const x3MultiplicadoraSegundoPaso = x3 * -1;

    x1 = x1 * x3MultiplicadoraSegundoPaso;
    y1 = y1 * x3MultiplicadoraSegundoPaso;
    z1 = z1 * x3MultiplicadoraSegundoPaso;
    resultadoLinea1 = resultadoLinea1 * x3MultiplicadoraSegundoPaso;

    x3 = x3 * x1Constante;
    y3 = y3 * x1Constante;
    z3 = z3 * x1Constante;
    resultadoLinea3 = resultadoLinea3 * x1Constante;

    x3 = x1 + x3;
    y3 = y1 + y3;
    z3 = z1 + z3;
    resultadoLinea3 = resultadoLinea1 + resultadoLinea3;

    x1 = x1Constante;
    y1 = y1Constante;
    z1 = z1Constante;
    resultadoLinea1 = resultado1Constante;

    // fin paso 2 en el que se le da el valor de 0 a x3

    // paso 3
    const y2Multiplicadora = y2 * -1;
    const y3Multiplicadora = y3;

    y2 = y2 * y3Multiplicadora;
    z2 = z2 * y3Multiplicadora;
    resultadoLinea2 = resultadoLinea2 * y3Multiplicadora;

    y3 = y3 * y2Multiplicadora;
    z3 = z3 * y2Multiplicadora;
    resultadoLinea3 = resultadoLinea3 * y2Multiplicadora;

    x3 = x2 + x3;
    y3 = y2 + y3;
    z3 = z2 + z3;
    resultadoLinea3 = resultadoLinea2 + resultadoLinea3;

    // fin paso 3 en donde se le da el valor de 0 a y3

    // resultado z
    let z = resultadoLinea3 / z3;
    let zConstante = z;

    // resultado y
    z2 = z2 * -1; // esto es para pasar el numero con su signo contrario 
    let resultadoParcialY = resultadoLinea2 + z2 * z;
    let y = resultadoParcialY / y2;

    // resultado x
    let yParaPasar = y1Constante * y * -1;  
    let zPAraPasar = z1Constante * zConstante * -1;
    let resultadoParcialX = resultado1Constante + yParaPasar + zPAraPasar;
    let x = resultadoParcialX / x1Constante;
    
    // mostrar resultado
    resultadoFinalX.innerHTML = x;
    resultadoFinalY.innerHTML = y;
    resultadoFinalZ.innerHTML = z;
} 


