let numero
let resultado = 0
do {
  numero = Number(prompt("Ingrese un número ('0' para salir): "))
  resultado += numero
} while (numero !== 0)

console.log(resultado)
