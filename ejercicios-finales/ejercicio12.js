let nro1 
let nro2 
let operacion 
while(true){
  operacion = prompt('Ingresa una operación(e para salir): ')
  nro1 =  Number(prompt('Ingresa un nro: '))
  nro2 =  Number(prompt('Ingresa otro nro: '))
  
  if(operacion == 'e') break

  if(operacion == '+') console.log(`${nro1} + ${nro2} = ${nro1 + nro2}`)

  else if(operacion == '-') console.log(`${nro1} - ${nro2} = ${nro1 - nro2}`)

  else if(operacion == '*') console.log(`${nro1} x ${nro2} = ${nro1 * nro2}`)

  else if (operacion == '/' && nro2 != 0) console.log(`${nro1} / ${nro2} = ${nro1 / nro2}`)

  else console.log('Algo está mal, ya sea un 0 en el segundo número o una operación no reconocida')
}

console.log('Adiós')
