// Datos de entradas
var inputA = () => parseInt(document.getElementById("input-A").value);
var inputB = () => parseInt(document.getElementById("input-B").value);
// Operadores
var calculadora = {
  sumar: (operandoA, operandoB) => operandoA + operandoB,
  restar: (operandoA, operandoB) => operandoA - operandoB,
  multiplicar: (operandoA, operandoB) => operandoA * operandoB,
  dividir: (operandoA, operandoB) => operandoA / operandoB,
};
// Se llama a la funcion al clickar CUALQUIER parte del documento
var click = () => document.addEventListener("click", resultado);
// FUNCION
function resultado(evento) {
  //calcula el resultado si la id del target clickado esta contenida en los operadores
  if (evento.target.id in calculadora) {
    var result = calculadora[evento.target.id](inputA(), inputB()); // Este es el resultado de la operacion
    //*objetivo opcional*
    result == "Infinity" || isNaN(result) //Comprueba  y da mensaje de "error" si el resultado es Infinity o NaN
      ? (document.getElementById("resultado").value = "error")
      : (document.getElementById("resultado").value = result);
  }
}
click();
