// 50 - 100

function check(num) {
    for (let index = 50; index < 100; index = index + 5) {
        if (num >= index && num <= index + 5) {
            console.log(`${num} is between ${index} and ${index + 5}`);
            break
        }
    }
}


check(100)