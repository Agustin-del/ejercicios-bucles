function selectionSort(arr){

  for (let i = 0; i < arr.length - 1; i++){
    let minIndex = i
    for(let j = i + 1; j < arr.length; j++){
      if(arr[minIndex] > arr[j]){
        minIndex = j
      } 
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}

const arr = [23,2,54,22,32]
console.log(selectionSort(arr))

