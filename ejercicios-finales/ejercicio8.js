const nro1 = Number(prompt('Ingresa un nro: '))
const nro2 = Number(prompt('Ingresa otro nro: '))
const operacion = prompt('Ingresa una operación: ')

if(operacion == '+') console.log(`${nro1} + ${nro2} = ${nro1 + nro2}`)
else if(operacion == '-') console.log(`${nro1} - ${nro2} = ${nro1 - nro2}`)
else if(operacion == '*') console.log(`${nro1} x ${nro2} = ${nro1 * nro2}`)
else if (operacion == '/' && nro2 != 0) console.log(`${nro1} / ${nro2} = ${nro1 / nro2}`)
else console.log('Algo está mal, ya sea un 0 en el segundo número o una operación no reconocida')
