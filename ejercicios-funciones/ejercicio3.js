function promedio(arr){
  let result = 0
  for(let i = 0; i < arr.length; i++){
    result += arr[i]
  }
  return result / arr.length
}
console.log(promedio([8,9,7,10,6]))
console.log(promedio([10,10,10]))
