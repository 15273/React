
let arr = [5,2,4,6,1,3]
let i = 0
for (let j = 1; j < arr.length; j++){
    let key = arr[j]
    i = j - 1
    while (arr[i] > key){
        arr[i + 1] = arr[i]
        i = i - 1
        arr[i + 1] = key
    }
}
console.log(arr)