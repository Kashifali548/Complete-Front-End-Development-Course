let arr = [2, 4, 5, 9, 8]
// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
let newArr = arr.map((e)=>{
    return e**2
})
console.log(newArr)

const greateThanSeven = (e) => {
    if (e > 7){
        return true
    }
    return false
}

console.log(arr.filter(greateThanSeven))

let arr2 = [3, 4, 2, 5]

const red = (a, b) => {
    return a + b
}

console.log(arr2.reduce(red))