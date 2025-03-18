// function add(a, b) {
//     console.count("add function called");
//     return a + b;
// }

// console.log("Sum:", add(1, 2));
// console.log("Sum:", add(2, 3));
// console.log("Sum:", add(2, 4));
// console.log("Sum:", add(2, 5));
// console.log("Sum:", add(2, 6));

// console.time("for loop");
// for (let i = 0; i < 1000000000; i++) { }
// console.timeEnd("for loop");

// const obj1 = { name: "John", age: 30 };
// const obj2 = { name: "Mary", age: 28 };
// const obj3 = { name: "Doe", age: 25 };

// console.table({ obj1, obj2, obj3 });


console.groupCollapsed("Group 1");
console.log("Log 1");
console.groupCollapsed("Group 2");
console.log("Log 3");
console.groupEnd("Group 2");
console.log("Log 2");
console.groupEnd("Group 1");
