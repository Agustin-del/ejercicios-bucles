let numero
let impares = 0
let pares = 0
do {
  numero = Number(prompt("Ingrese un número ('0' para salir): "))
  if(numero % 2 === 0) pares += numero
  else impares += numero
} while (numero !== 0)

console.log(`Numeros pares: ${pares}`)
console.log(`Numeros impares: ${impares}`)
