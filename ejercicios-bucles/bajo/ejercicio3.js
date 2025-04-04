let result = 0
let numero = Number(prompt("Ingrese un número ('0' para salir): "))
while(numero !== 0){
  result += numero
  numero = Number(prompt("Ingrese un número ('0' para salir): "))
}

console.log(result)
