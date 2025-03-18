(function name(params) {
    console.log("IIFE");
})();

const val1 = 10
const val2 = 20

const sum = (num1, num2) => {
    return num1 + num2
}

const result1 = sum(val1, val2);
const result2 = sum(20, 30);