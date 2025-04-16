function verificarPalindromo(palabra){
  for(let i = 0; i < Math.floor(palabra.length); i++) {
    if(palabra[i] !== palabra[palabra.length - i - 1]) return false
  } 
  return true
}
