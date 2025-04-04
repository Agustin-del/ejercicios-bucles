const numero = Number(prompt('Ingrese un número: ')) 
const divisores = []

for(let i = 1; i <= numero; i++) {
  numero % i === 0 && divisores.push(i)
}

console.log(divisores.reverse().join(','))
