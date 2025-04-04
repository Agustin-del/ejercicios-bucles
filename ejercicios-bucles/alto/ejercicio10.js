const numeros = [100, 42, 10, 54, 21, 43, 5, 20, 58, 72]

let mayor = -Infinity
for(let i = 0; i < numeros.length; i++){
  if(numeros[i] > mayor) mayor = numeros[i] 
}

console.log(mayor)
