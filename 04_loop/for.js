// // for of

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const num of arr) {
//     //console.log(num);
// }

// const sms = "Hello World";

// for (const element of sms) {
//     if (element === " ") {
//         continue
//     }
//     console.log(element);

// }


// for in

const obj = {
    name: "Rabbi Sunan",
    age: 25,
    email: "0EYp6@example.com"
}

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}