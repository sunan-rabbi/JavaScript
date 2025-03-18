// declare object

const symbol1 = Symbol('id');

const info = {

    name: "Sunan Rabbi",
    age: 30,
    email: "sunanrabbi1918@gmail.com",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    },
    isMarried: false,
    children: ["A", "B", "C"],

    // unique 
    "number": `01712345678`,
    [symbol1]: "3956", // symbol
    greetings: function () {
        console.log(`Hello ${this.name}!!!`); // this is object method
    }
}


// way to call object
console.log(info.name);
console.log(info.age);

console.log(info['number']); // way to call string key
console.log(info[symbol1]); // way to call symbol key

info.greetings(); // way to call function


//modify object
info.name = "Rabbi Sunan";
info.greetings = function () {
    console.log(`Hii ${this.name}!!!`);
}


// freeze the modify object
Object.freeze(info);

info.name = "Rabbi Sunan";
info.greetings = function () {
    console.log(`Hii ${this.name}!!!`);
}