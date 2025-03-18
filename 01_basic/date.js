const date = new Date();

// // Important Note: Date is a class not a function
// console.log(date.toISOString()); // 2025-03-03T15:46:29.584Z
// console.log(typeof date); // object


// console.log(date); // 2025-03-03T15:46:29.584Z
// console.log(date.toDateString()); // Mon Mar 03 2025
// console.log(date.toISOString()); // 2025-03-03T15:46:29.584Z
// console.log(date.toJSON()); // 2025-03-03T15:46:29.584Z
// console.log(date.toString()); // Mon Mar 03 2025 15:46:29 GMT+0530 (Bangladesh Standard Time)
// console.log(date.toUTCString()); // Mon, 03 Mar 2025 15:46:29 GMT
// console.log(date.toTimeString()); // 15:46:29 GMT+0530 (Bangladesh Standard Time)
// console.log(date.toLocaleDateString()); // 3/3/2025
// console.log(date.toLocaleString()); // 3/3/2025, 3:46:29 PM
// console.log(date.toLocaleTimeString()); // 3:46:29 PM


console.log(date.getFullYear()); // 2025
console.log(date.getMonth()); // 2
console.log(date.getDate()); // 3
console.log(date.getDay()); // 1
console.log(date.getHours()); // 15
console.log(date.getMinutes()); // 46
console.log(date.getSeconds()); // 29
console.log(date.getMilliseconds()); // 584

//what is difference between getDay and getDate
// getDay returns the day of the week (0-6), while getDate returns the day of the month (1-31)