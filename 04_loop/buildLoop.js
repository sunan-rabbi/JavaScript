const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newArr = arr.filter((num, index, arr) => {
//     console.log(`${index + 1}. ${num}  arr: [${arr}]`);

//     return num % 2 === 0
// })

// console.log(newArr);

const newArr = arr.map((num) => num + 2)

console.log(newArr);