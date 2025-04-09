function unique(arr){
  const temp = {}
  const newArray = []

  for (let i = 0; i < arr.length; i++){
    if(!temp[arr[i]]){
      temp[arr[i]] = 1
      newArray.push(arr[i])
    }
  }

  return newArray
}


console.log(unique(['a','b', 'b', 'c', 'a']))
console.log(unique([1,2,2,3,4,4,5]))
