function reverse(word){
  let result = ""
  for(let i = word.length - 1; i >= 0; i--){
    result += word[i] 
  }
  return result
}

console.log(reverse('hola'))
console.log(reverse('javascript'))
