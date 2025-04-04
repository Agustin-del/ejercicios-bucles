let result = 0
let numero = Number(prompt("Ingrese un número ('0' para salir): "))
while(numero !== 0){
  result += numero
  numero = Number(prompt("Ingrese un número ('0' para salir): "))
} 

let adivinanza
let intentos = 0
do{
  adivinanza = Number(prompt('Adivine el número: '))
  if(adivinanza < result) console.log('El número ingresado es menor al secreto')
  else if (adivinanza > result) console.log('El número ingresado es mayor al secreto')
  intentos++
} while( adivinanza !== result)

console.log(`¡Acertaste! El número secreto era ${adivinanza} y realizaste ${intentos} intentos`)
