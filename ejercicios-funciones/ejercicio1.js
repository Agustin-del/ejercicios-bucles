function includes(arr, target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target) return true
  }
  return false
}

console.log(includes([1,2,3,4,5], 3));

console.log(includes(['manzana', 'banana', 'naranja'], 'pera'));
